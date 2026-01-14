const functions = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();

exports.aiReply = functions.onRequest(
  {
    region: "us-central1",
    secrets: ["OPENAI_API_KEY"],
  },
  async (req, res) => {
    try {
      // Autoriser POST uniquement
      if (req.method !== "POST") {
        return res.status(405).send("Method Not Allowed");
      }

      const { prompt, spaceId, roomId } = req.body;

      if (!prompt || !spaceId || !roomId) {
        return res.status(400).send("Bad request");
      }

      const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
      });

      const completion = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "Tu es une IA utile et concise." },
          { role: "user", content: prompt },
        ],
      });

      const answer =
        completion.choices?.[0]?.message?.content ||
        "Erreur : réponse vide";

      // (optionnel) sauvegarde Firestore
      await admin.firestore().collection("messages").add({
        uid: "AI_BOT",
        displayName: "IA",
        text: answer.slice(0, 800),
        spaceId,
        roomId,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return res.status(200).json({ answer });
    } catch (err) {
      console.error("AI ERROR:", err);
      return res.status(500).send("OpenAI error");
    }
  }
);