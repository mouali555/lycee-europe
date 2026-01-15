// js/services/authService.js

import { auth, db } from "./firebase.js";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();

export async function loginGoogle() {
  const res = await signInWithPopup(auth, provider);

  // Profil minimal
  await setDoc(
    doc(db, "users", res.user.uid),
    {
      uid: res.user.uid,
      displayName: res.user.displayName || "user",
      photoURL: res.user.photoURL || null,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  return res.user;
}

export function logout() {
  return signOut(auth);
}

export function watchAuth(cb) {
  return onAuthStateChanged(auth, cb);
}

export async function getIdTokenSafe() {
  try {
    const u = auth.currentUser;
    if (!u) return null;
    return await u.getIdToken();
  } catch {
    return null;
  }
}
