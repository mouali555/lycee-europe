// js/services/chatService.js
// Firestore: membership, invites, messages (subscribe + send)

import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  serverTimestamp,
  collection,
  collectionGroup,
  query,
  orderBy,
  limit,
  limitToLast,
  onSnapshot,
  addDoc,
  where,
  documentId,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function checkMembership(spaceId, uid) {
  const memRef = doc(db, "spaces", spaceId, "members", uid);
  const snap = await getDoc(memRef);
  return snap.exists();
}

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

// --- Listing ("salons") ---

// Liste les espaces où l'utilisateur est membre.
// Fallback safe: retourne [] si les règles Firestore bloquent.
export async function listUserSpaces(uid) {
  if (!uid) return [];
  try {
    const q = query(collectionGroup(db, "members"), where(documentId(), "==", uid));
    const snap = await getDocs(q);
    const spaces = [];
    snap.forEach((d) => {
      // Path: spaces/{spaceId}/members/{uid}
      const p = d.ref.path.split("/");
      const spaceId = p?.[1];
      if (spaceId) spaces.push({ id: spaceId });
    });
    // de-dupe
    return Array.from(new Map(spaces.map((s) => [s.id, s])).values());
  } catch {
    return [];
  }
}

export async function listRooms(spaceId) {
  if (!spaceId) return [];
  try {
    const ref = collection(db, "spaces", spaceId, "rooms");
    const snap = await getDocs(ref);
    const rooms = [];
    snap.forEach((d) => rooms.push({ id: d.id, ...(d.data() || {}) }));
    return rooms;
  } catch {
    return [];
  }
}

export function subscribeRoomMessages(spaceId, roomId, onChange) {
  const msgRef = collection(db, "spaces", spaceId, "rooms", roomId, "messages");
  // ✅ On garde les messages dans l'ordre chronologique, MAIS on ne charge que les plus récents.
  const q = query(msgRef, orderBy("createdAt", "asc"), limitToLast(120));

  return onSnapshot(
    q,
    (snap) => {
      // Incremental: on utilise docChanges (au lieu de rerender toute la liste)
      const changes = snap.docChanges();
      for (const ch of changes) {
        if (ch.type === "added") {
          onChange({ id: ch.doc.id, ...ch.doc.data() });
        }
      }
    },
    (err) => {
      console.error(err);
      throw err;
    }
  );
}

export async function sendRoomMessage(spaceId, roomId, msg) {
  const msgRef = collection(db, "spaces", spaceId, "rooms", roomId, "messages");
  await addDoc(msgRef, { ...msg, createdAt: serverTimestamp() });
}

// ===== Listing helpers (Spaces / Rooms) =====

/**
 * Liste des rooms d'un space.
 * ⚠️ Pas d'orderBy ici pour éviter les index manquants.
 */
export async function listRooms(spaceId) {
  const ref = collection(db, "spaces", spaceId, "rooms");
  const snap = await getDocs(ref);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() || {}) }));
}

/**
 * Liste les spaces où l'utilisateur est membre.
 * Utilise collectionGroup + documentId == uid (fast & scalable).
 */
export async function listMemberSpaces(uid) {
  if (!uid) return [];
  const q = query(collectionGroup(db, "members"), where(documentId(), "==", uid));
  const snap = await getDocs(q);

  // Path: spaces/{spaceId}/members/{uid}
  const out = [];
  for (const d of snap.docs) {
    const parts = d.ref.path.split("/");
    const spaceId = parts?.[1];
    if (spaceId) out.push({ id: spaceId, ...(d.data() || {}) });
  }
  return out;
}

export async function getSpaceMeta(spaceId) {
  const ref = doc(db, "spaces", spaceId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() || {}) };
}

export async function getRoomMeta(spaceId, roomId) {
  const ref = doc(db, "spaces", spaceId, "rooms", roomId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...(snap.data() || {}) };
}
