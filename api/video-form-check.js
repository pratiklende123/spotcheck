// Vercel serverless function for AI Video Form Analysis.
// Receives keyframe snapshots (base64) + exercise details + pose metrics,
// calls Vision AI (Gemini or Claude) and returns a natural language coaching breakdown.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { exerciseName, reps, pattern, metrics, frames } = req.body || {};

  if (!exerciseName && !pattern) {
    return res.status(400).json({ error: 'Exercise name or pattern is required.' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  // Fallback response if no live API key is set yet in environment
  if (!geminiKey && !anthropicKey) {
    const feedback = generateLocalAIFeedback(exerciseName || pattern, reps, metrics);
    return res.status(200).json({
      source: 'local-ai-engine',
      result: feedback,
      note: 'Using local AI engine. Add GEMINI_API_KEY or ANTHROPIC_API_KEY in Vercel to enable cloud Vision AI analysis.'
    });
  }

  const promptText = `You are an expert strength & conditioning coach and biomechanics assistant for SpotCheck. ` +
    `Analyze this video form check for the exercise "${exerciseName || pattern}". ` +
    `Rep Count: ${reps || 0}. Pose Metrics: ${JSON.stringify(metrics || {})}. ` +
    `Provide a concise 3-part form breakdown: ` +
    `\n### 🟢 Form Wins\n` +
    `\n### 🔴 Form Mistakes & Corrections\n` +
    `\n### ⚠️ Safety & Injury Prevention Cues\n` +
    `Keep it direct, constructive, and under 200 words.`;

  try {
    // 1. If Gemini key is set
    if (geminiKey) {
      const parts = [{ text: promptText }];

      if (Array.isArray(frames)) {
        frames.slice(0, 3).forEach(base64Data => {
          const match = base64Data.match(/^data:(image\/[a-zA-Z]+);base64,(.+)$/);
          if (match) {
            parts.push({
              inlineData: {
                mimeType: match[1],
                data: match[2]
              }
            });
          }
        });
      }

      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`;
      const response = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts }] })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error?.message || 'Gemini API error');
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No feedback generated.';
      return res.status(200).json({ source: 'gemini-vision', result: text });
    }

    // 2. If Anthropic key is set
    if (anthropicKey) {
      const messageContent = [{ type: 'text', text: promptText }];

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
          'x-api-key': anthropicKey,
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
        throw new Error(data.error?.message || 'Anthropic API error');
      }

      const text = data.content?.find(b => b.type === 'text')?.text || 'No feedback generated.';
      return res.status(200).json({ source: 'claude-vision', result: text });
    }
  } catch (err) {
    const feedback = generateLocalAIFeedback(exerciseName || pattern, reps, metrics);
    return res.status(200).json({
      source: 'local-ai-engine',
      result: feedback,
      error: err.message
    });
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
