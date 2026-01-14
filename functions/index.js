const functions = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const OpenAI = require("openai");

admin.initializeApp();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.aiReply = functions.onRequest(
  { region: "us-central1" },
  async (req, res) => {
    try {
      if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
      }

      const { prompt, spaceId, roomId } = req.body;

      if (!prompt || !spaceId || !roomId) {
        return res.status(400).send("Bad request");
      }

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Tu es une IA scolaire utile, claire et concise.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const answer =
        completion.choices?.[0]?.message?.content ||
        "Je n’ai pas pu répondre.";

      await admin
        .firestore()
        .collection("messages")
        .add({
          uid: "AI_BOT",
          displayName: "IA",
          text: answer.slice(0, 800),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

      res.status(200).json({ answer });
    } catch (err) {
      console.error("OPENAI ERROR:", err);
      res.status(500).send("OpenAI error");
    }
  }
);