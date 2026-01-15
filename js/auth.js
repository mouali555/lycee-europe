// js/auth.js — Google Auth (Popup + Redirect fallback) + profile sync
import { auth, db } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  doc, setDoc, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();

// ✅ important sinon popup iOS bloque
provider.setCustomParameters({
  prompt: "select_account"
});

// Sync profil dans /users/{uid}
async function syncProfile(user) {
  if (!user) return;
  await setDoc(
    doc(db, "users", user.uid),
    {
      uid: user.uid,
      displayName: user.displayName || "user",
      photoURL: user.photoURL || null,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

// ✅ LOGIN
export async function loginGoogle() {
  // 1) Si un redirect est en attente, on le récupère
  // (utile surtout sur iOS / popup bloqué)
  try {
    const rr = await getRedirectResult(auth);
    if (rr?.user) {
      await syncProfile(rr.user);
      return rr.user;
    }
  } catch (e) {
    // on ignore, c’est ok
    console.warn("redirectResult error:", e?.code || e?.message);
  }

  // 2) On tente popup
  try {
    const res = await signInWithPopup(auth, provider);
    await syncProfile(res.user);
    return res.user;
  } catch (e) {
    console.warn("popup login failed:", e?.code || e?.message);

    // 3) Fallback: redirect (marche presque partout)
    // (ça recharge la page, c’est normal)
    await signInWithRedirect(auth, provider);
    return null; // redirect va continuer après reload
  }
}

export function logout() {
  return signOut(auth);
}

export function watchAuth(cb) {
  return onAuthStateChanged(auth, async (user) => {
    try {
      if (user) await syncProfile(user);
    } catch {}
    cb(user);
  });
}