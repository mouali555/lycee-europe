// functions/index.js
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Node 20 a fetch natif (OK). Pas besoin de node-fetch.
exports.aiReply = onRequest(
  {
    region: "us-central1",
    secrets: ["OPENAI_API_KEY"],
    // (optionnel) tu peux augmenter si besoin
    timeoutSeconds: 60,
    memory: "256MiB",
  },
  async (req, res) => {
    // ✅ CORS
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");

    if (req.method === "OPTIONS") {
      return res.status(204).send("");
    }

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed. Use POST." });
    }

    try {
      const key = process.env.OPENAI_API_KEY;
      if (!key) {
        logger.error("OPENAI_API_KEY missing (secret not available).");
        return res.status(500).json({ error: "OPENAI_API_KEY missing" });
      }

      const body = req.body || {};
      const prompt = body.prompt;

      if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Missing prompt (string) in JSON body" });
      }

      // ✅ Appel OpenAI (format moderne stable)
      // On utilise /v1/chat/completions (simple, marche bien)
      const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "Tu es une IA utile et concise." },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
        }),
      });

      const text = await openaiResp.text();

      // ✅ Si OpenAI renvoie une erreur, on log TOUT
      if (!openaiResp.ok) {
        logger.error("OpenAI HTTP error", {
          status: openaiResp.status,
          body: text,
        });
        return res.status(500).json({
          error: "OpenAI error",
          openai_status: openaiResp.status,
          openai_body: text,
        });
      }

      // ✅ Parsing JSON
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        logger.error("OpenAI response not JSON", { raw: text });
        return res.status(500).json({ error: "OpenAI response not JSON", raw: text });
      }

      const answer =
        data?.choices?.[0]?.message?.content?.trim() ||
        "(no answer from model)";

      return res.status(200).json({ answer });
    } catch (err) {
      logger.error("Function crash", err);
      return res.status(500).json({ error: "Server error", details: String(err?.message || err) });
    }
  }
);