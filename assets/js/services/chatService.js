// js/services/chatService.js
import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

/* ===============================
   MEMBERSHIP
================================ */

export async function checkMembership(spaceId, uid) {
  if (!spaceId || !uid) return false;
  const ref = doc(db, "spaces", spaceId, "members", uid);
  const snap = await getDoc(ref);
  return snap.exists();
}

/* ===============================
   MESSAGES
================================ */

export async function sendRoomMessage(spaceId, roomId, payload) {
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

    // ✅ timestamp immédiat → pas NULL → ordre OK
    createdAt: Timestamp.now(),

    // optionnel
    createdAtServer: serverTimestamp(),
  });
}

export function subscribeRoomMessages(spaceId, roomId, onEvent) {
  const colRef = collection(
    db,
    "spaces",
    spaceId,
    "rooms",
    roomId,
    "messages"
  );

  const q = query(colRef, orderBy("createdAt", "asc"));

  // includeMetadataChanges -> utile pour debug (fromCache / pendingWrites)
  return onSnapshot(
    q,
    { includeMetadataChanges: true },
    (snap) => {
      // Debug overlay: expose metadata réseau réel Firestore
      try {
        window.__XPDBG__?.setFirestoreMeta?.(snap.metadata);
      } catch {}

    snap.docChanges().forEach((c) => {
      onEvent({
        type: c.type,
        id: c.doc.id,
        ...c.doc.data(),
        newIndex: c.newIndex,
        oldIndex: c.oldIndex,
      });
    });
    },
    (err) => {
      try {
        window.__XPDBG__?.err?.(err, "FIRESTORE_SNAPSHOT_ERROR");
      } catch {}
      // On garde l'app fonctionnelle même si l'overlay n'existe pas.
      // Les erreurs de snapshot peuvent venir d'un offline réel.
      console.error("onSnapshot error:", err);
    }
  );
}
