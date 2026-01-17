// js/services/chatService.js
// Firestore: membership, invites, messages (subscribe + send)

import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  orderBy,
  limitToLast,
  onSnapshot,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

/**
 * Vérifie si l'utilisateur est membre d'un espace.
 */
export async function checkMembership(spaceId, uid) {
  const memRef = doc(db, "spaces", spaceId, "members", uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

/**
 * Rejoint un espace avec un code d'invitation.
 */
export async function joinWithInvite(spaceIdFallback, code, user) {
  const inviteCode = String(code || "").trim().toUpperCase();
  if (!inviteCode) throw new Error("INVITE_CODE_REQUIRED");
  if (!user?.uid) throw new Error("AUTH_REQUIRED");

  const invRef = doc(db, "invites", inviteCode);
  const invSnap = await getDoc(invRef);
  if (!invSnap.exists()) throw new Error("INVITE_INVALID");

  const inv = invSnap.data();
  if (inv.enabled !== true) throw new Error("INVITE_DISABLED");

  const spaceId = String(inv.spaceId || spaceIdFallback || "").trim();
  if (!spaceId) throw new Error("INVITE_BROKEN");

  const memRef = doc(db, "spaces", spaceId, "members", user.uid);
  const memSnap = await getDoc(memRef);
  if (memSnap.exists()) return { ok: true, spaceId, already: true };

  await setDoc(memRef, {
    role: inv.role || "member",
    joinedAt: serverTimestamp(),
    displayName: user.name,
  });

  return { ok: true, spaceId, already: false };
}

/**
 * Abonnement aux messages d'une room.
 * onChange est appelé pour chaque nouveau message.
 */
export function subscribeRoomMessages(spaceId, roomId, onChange) {
  const msgRef = collection(db, "spaces", spaceId, "rooms", roomId, "messages");

  // Messages en ordre chrono, mais on ne garde que les 120 derniers.
  const q = query(msgRef, orderBy("createdAt", "asc"), limitToLast(120));

  return onSnapshot(
    q,
    (snap) => {
      const changes = snap.docChanges();
      for (const ch of changes) {
        if (ch.type === "added") {
          onChange({ id: ch.doc.id, ...ch.doc.data() });
        }
      }
    },
    (err) => {
      console.error(err);
    }
  );
}

/**
 * Envoie un message texte / image dans une room.
 */
export async function sendRoomMessage(spaceId, roomId, msg) {
  const msgRef = collection(db, "spaces", spaceId, "rooms", roomId, "messages");
  await addDoc(msgRef, {
    ...msg,
    createdAt: serverTimestamp(),
  });
}
