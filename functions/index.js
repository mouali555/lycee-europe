import { onRequest } from "firebase-functions/v2/https";
import fetch from "node-fetch";

export const aiReply = onRequest(
  { region: "us-central1" },
  async (req, res) => {
    try {
      const message = req.body?.message;

      if (!message) {
        return res.status(400).json({ error: "No message provided" });
      }

      const apiKey = process.env.OPENAI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "OPENAI_API_KEY missing" });
      }

      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(500).json({
          error: "OpenAI error",
          details: data
        });
      }

      const output =
        data.output_text ||
        data.output?.[0]?.content?.[0]?.text ||
        "No response";

      res.json({ reply: output });
    } catch (err) {
      res.status(500).json({
        error: "Server crash",
        details: String(err)
      });
    }
  }
);