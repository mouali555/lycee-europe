// js/services/userService.js

import { db } from "./firebase.js";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

export async function ensureUserDoc(user) {
  if (!user?.uid) return;

  const uref = doc(db, "users", user.uid);
  const snap = await getDoc(uref);

  if (!snap.exists()) {
    await setDoc(uref, {
      displayName: user.name,
      photoURL: user.photoURL || null,
      rank: "BRONZE",
      keys: [],
      createdAt: serverTimestamp(),
    });
  } else {
    await setDoc(
      uref,
      {
        displayName: user.name,
        photoURL: user.photoURL || null,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  }
}

export async function getProfile(uid) {
  if (!uid) return { keys: [], rank: "BRONZE" };
  const uref = doc(db, "users", uid);
  const snap = await getDoc(uref);
  const data = snap.exists() ? snap.data() : {};
  return {
    keys: Array.isArray(data.keys) ? data.keys : [],
    rank: String(data.rank || "BRONZE").toUpperCase(),
    photoURL: data.photoURL || null,
    displayName: data.displayName || null,
  };
}

export function genKeyCode(tier) {
  const p = String(tier || "BRONZE")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${p}-${rand}`;
}

export async function grantKey(uid, tier = "BRONZE") {
  const code = genKeyCode(tier);
  const uref = doc(db, "users", uid);
  await updateDoc(uref, { keys: arrayUnion(code) });
  return code;
}

export async function removeKey(uid, code) {
  const uref = doc(db, "users", uid);
  await updateDoc(uref, { keys: arrayRemove(String(code).toUpperCase()) });
}
