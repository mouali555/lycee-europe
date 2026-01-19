// js/services/authService.js

import { auth, db } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const provider = new GoogleAuthProvider();

/**
 * Login Google + création / mise à jour du profil minimal en base.
 */
export async function loginGoogle() {
  // Sur mobile (iOS/Safari notamment) le popup peut être bloqué.
  // On tente popup -> fallback redirect.
  let res;
  try {
    res = await signInWithPopup(auth, provider);
  } catch (e) {
    try {
      window.__XPDBG__?.err?.(e, "AUTH_POPUP_FAILED");
    } catch {}
    const code = String(e?.code || "");
    const popupRelated = [
      "auth/popup-blocked",
      "auth/popup-closed-by-user",
      "auth/operation-not-supported-in-this-environment",
      "auth/unauthorized-domain",
    ].includes(code);

    if (popupRelated) {
      try {
        window.__XPDBG__?.warn?.("AUTH_REDIRECT_FALLBACK", { code });
      } catch {}
      await signInWithRedirect(auth, provider);
      // La page va rediriger, donc on n'a pas de res ici.
      return null;
    }
    throw e;
  }

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

// Au chargement, récupère un éventuel résultat de redirect (mobile)
export async function consumeRedirectLogin() {
  try {
    const r = await getRedirectResult(auth);
    return r?.user || null;
  } catch {
    return null;
  }
}

export function logout() {
  return signOut(auth);
}

/**
 * Abonnement aux changements d'auth (utilisé par main.js).
 */
export function watchAuth(cb) {
  return onAuthStateChanged(auth, cb);
}

/**
 * Récupération du token ID ou null si non connecté / erreur.
 */
export async function getIdTokenSafe() {
  try {
    const u = auth.currentUser;
    if (!u) return null;
    return await u.getIdToken();
  } catch {
    return null;
  }
}
