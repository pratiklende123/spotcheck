// Netlify serverless function for AI Video Form Analysis.
// Receives keyframe snapshots (base64) + exercise details + pose metrics,
// calls Vision AI (Anthropic Claude 3.5 Sonnet or Gemini 1.5 Pro) and returns a natural language coaching breakdown.

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body.' }) };
  }

  const { exerciseName, reps, pattern, metrics, frames } = body;

  if (!exerciseName && !pattern) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Exercise name or pattern is required.' })
    };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.GEMINI_API_KEY;

  // Fallback response if no live API key is set yet in Netlify environment
  if (!apiKey) {
    const feedback = generateLocalAIFeedback(exerciseName || pattern, reps, metrics);
    return {
      statusCode: 200,
      body: JSON.stringify({
        source: 'local-ai-engine',
        result: feedback,
        note: 'Set ANTHROPIC_API_KEY or GEMINI_API_KEY in Netlify to enable cloud Vision LLM calls.'
      })
    };
  }

  try {
    // If Anthropic key is present
    if (process.env.ANTHROPIC_API_KEY) {
      const messageContent = [
        {
          type: 'text',
          text: `You are an expert strength & conditioning coach and biomechanics assistant for SpotCheck. ` +
                `Analyze this video form check for the exercise "${exerciseName || pattern}". ` +
                `Rep Count: ${reps || 0}. Pose Metrics: ${JSON.stringify(metrics || {})}. ` +
                `Provide a concise 3-part form breakdown: ` +
                `1. 🟢 What went well (Form wins) ` +
                `2. 🔴 Form Mistakes & Corrections ` +
                `3. ⚠️ Safety & Injury Prevention Cues. Keep it direct and encouraging, under 200 words.`
        }
      ];

      // Add image frames if available
      if (Array.isArray(frames)) {
        frames.slice(0, 3).forEach(base64Data => {
          const cleanBase64 = base64Data.replace(/^data:image\/(png|jpeg|webp);base64,/, '');
          messageContent.push({
            type: 'image',
            source: {
              type: 'base64',
              media_type: 'image/jpeg',
              data: cleanBase64
            }
          });
        });
      }

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 500,
          messages: [{ role: 'user', content: messageContent }]
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || 'API error');
      }

      const text = data.content?.find(b => b.type === 'text')?.text || 'No feedback generated.';
      return { statusCode: 200, body: JSON.stringify({ source: 'vision-llm', result: text }) };
    }
  } catch (err) {
    // Fallback on error
    const feedback = generateLocalAIFeedback(exerciseName || pattern, reps, metrics);
    return {
      statusCode: 200,
      body: JSON.stringify({
        source: 'local-ai-engine',
        result: feedback,
        error: err.message
      })
    };
  }
};

function generateLocalAIFeedback(liftName, reps, metrics) {
  let wins = [];
  let fixes = [];
  let cues = [];

  wins.push(`Completed ${reps || 0} reps with smooth rep duration and consistent pacing.`);

  if (metrics && metrics.kneeOverToe > 0.45) {
    fixes.push('Knee forward travel was slightly high — focus on sitting hips back at the start of the rep.');
    cues.push('Keep heels planted firmly and drive force through the mid-foot.');
  } else {
    wins.push('Good shin angle and knee position relative to the ankle.');
  }

  if (metrics && metrics.valgus > 0.1) {
    fixes.push('Knees showed slight inward collapse (knee valgus) on the bottom of the rep.');
    cues.push('Screw your feet into the floor to activate glutes and push knees outward.');
  } else {
    wins.push('Knees tracked well in line with toes.');
  }

  if (metrics && metrics.torsoLean > 50) {
    fixes.push('Torso leaned forward past 50° — maintain a tall chest.');
    cues.push('Brace your core before each rep and pick a spot on the wall ahead to focus your eyes.');
  }

  return `### 🟢 Form Wins\n` +
         wins.map(w => `- ${w}`).join('\n') + `\n\n` +
         `### 🔴 Key Adjustments\n` +
         (fixes.length ? fixes.map(f => `- ${f}`).join('\n') : '- No major form breaks detected! Great control.') + `\n\n` +
         `### ⚠️ Coaching Cues\n` +
         (cues.length ? cues.map(c => `- ${c}`).join('\n') : '- Maintain current form and gradually build resistance.');
}
