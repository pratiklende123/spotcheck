// This runs on Netlify's servers, not in the user's browser — so your API key stays hidden.
// NOTE: not currently called from index.html. The "describe your own exercise" flow now
// checks a pre-written guide library first and falls back to log-only (Netlify Forms) for
// anything unmatched, to avoid AI costs while there's no billing/spend cap set up. Re-wire
// index.html's submitDescription() to call this again once you're ready to pay for live AI.
exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let description;
  try {
    ({ description } = JSON.parse(event.body));
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Bad request.' }) };
  }

  if (!description || description.trim().length < 5) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Please describe the exercise in a bit more detail.' })
    };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 400,
        system:
          "You are a cautious fitness-safety assistant inside a gym app called SpotCheck. " +
          "A user describes an exercise that isn't yet in the app's library. Give a short, plain-language " +
          "educational read covering: (1) common form mistakes on similar movements, (2) what injuries those " +
          "mistakes commonly lead to, (3) 2-3 general safety cues. Keep it under 150 words, no headers or markdown. " +
          "Never claim certainty about their specific form since you haven't seen it, and end with one sentence " +
          "noting this is general education, not medical or professional coaching advice.",
        messages: [{ role: 'user', content: description }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return { statusCode: 502, body: JSON.stringify({ error: 'AI provider error, try again shortly.' }) };
    }

    const text = data.content?.find((b) => b.type === 'text')?.text
      || "Couldn't generate a response — try rephrasing.";

    return { statusCode: 200, body: JSON.stringify({ result: text }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server error, try again.' }) };
  }
};
