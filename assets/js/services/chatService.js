// js/services/chatService.js
import { db } from "../core/firebase.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  query,
  orderBy,
  where,
  limit,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

/**
 * ===============================
 *  MEMBERSHIP / INVITE
 * ===============================
 */

// Vérifie si l'utilisateur est membre de l'espace
export async function checkMembership(spaceId, uid) {
  if (!spaceId || !uid) return false;
  const ref = doc(db, "spaces", spaceId, "members", uid);
  const snap = await getDoc(ref);
  return snap.exists();
}

// Rejoindre un espace avec un code d'invite
export async function joinWithInvite(spaceId, code, user) {
  if (!spaceId || !code || !user) {
    throw new Error("INVALID_INVITE");
  }

  const inviteRef = doc(db, "spaces", spaceId, "invites", code);
  const inviteSnap = await getDoc(inviteRef);

  if (!inviteSnap.exists()) {
    throw new Error("INVITE_NOT_FOUND");
  }

  const memberRef = doc(db, "spaces", spaceId, "members", user.uid);
  const memberSnap = await getDoc(memberRef);

  if (memberSnap.exists()) {
    return { already: true };
  }

  await setDoc(memberRef, {
    uid: user.uid,
    displayName: user.name || "USER",
    joinedAt: serverTimestamp(),
  });

  return { already: false };
}

/**
 * ===============================
 *  MESSAGES
 * ===============================
 */

// 🔥 ENVOI D'UN MESSAGE
// FIX MAJEUR : createdAt = Timestamp.now() (jamais NULL)
// => Firestore trie correctement dès l’ajout
export async function sendRoomMessage(spaceId, roomId, payload) {
  if (!spaceId || !roomId) {
    throw new Error("INVALID_ROOM");
  }

  const colRef = collection(
    db,
    "spaces",
    spaceId,
    "rooms",
    roomId,
    "messages"
  );

  return addDoc(colRef, {
    ...payload,

    // ✅ timestamp immédiat → ordre OK instantanément
    createdAt: Timestamp.now(),

    // ✅ timestamp serveur (optionnel, analytics / audit)
    createdAtServer: serverTimestamp(),
  });
}

// 🔥 ABONNEMENT AUX MESSAGES
// FIX MAJEUR :
// - orderBy(createdAt, "asc")
// - support des docChanges (added / modified / removed)
// - newIndex / oldIndex transmis à l'UI
export function subscribeRoomMessages(spaceId, roomId, onEvent) {
  if (!spaceId || !roomId || typeof onEvent !== "function") {
    throw new Error("INVALID_SUBSCRIBE");
  }

  const colRef = collection(
    db,
    "spaces",
    spaceId,
    "rooms",
    roomId,
    "messages"
  );

  // ✅ TRI DÉFINITIF (plus de messages en haut)
  const q = query(colRef, orderBy("createdAt", "asc"));

  return onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const data = change.doc.data() || {};

      onEvent({
        type: change.type, // "added" | "modified" | "removed"
        id: change.doc.id,
        ...data,
        newIndex: change.newIndex,
        oldIndex: change.oldIndex,
      });
    });
  });
}
