// js/services/reactionService.js
// Reactions "like/love/laugh" synchronisées (Firestore)

import { db } from "./firebase.js";

import {
  doc,
  runTransaction,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// UI emoji -> Firestore safe key
function keyFromEmoji(emoji) {
  if (emoji === "👍") return "like";
  if (emoji === "❤️") return "love";
  if (emoji === "😂") return "laugh";
  return null;
}

/**
 * Toggle reaction on a message.
 * Stored format: reactions = { like: [uid], love: [uid], laugh: [uid] }
 */
export async function toggleRoomMessageReaction({
  spaceId,
  roomId,
  messageId,
  uid,
  emoji,
}) {
  const key = keyFromEmoji(emoji);
  if (!key) throw new Error("BAD_REACTION");
  if (!spaceId || !roomId || !messageId || !uid) throw new Error("BAD_REQUEST");

  const ref = doc(db, "spaces", spaceId, "rooms", roomId, "messages", messageId);

  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error("NOT_FOUND");

    const data = snap.data() || {};
    const reactions = data.reactions || {};
    const arr = Array.isArray(reactions[key]) ? reactions[key] : [];

    const has = arr.includes(uid);
    const next = has ? arr.filter((x) => x !== uid) : [...arr, uid];

    // keep small arrays only (anti-spam) – hard cap
    const capped = next.slice(0, 80);

    tx.update(ref, {
      reactions: {
        ...reactions,
        [key]: capped,
      },
    });
  });
}
