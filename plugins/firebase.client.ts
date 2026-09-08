// plugins/firebase.client.ts
// ══════════════════════════════════════════════════════════════
// Initialisation Firebase — Lycée Europe
// ══════════════════════════════════════════════════════════════
// ⚠️  Remplacez les valeurs ci-dessous par votre config Firebase
//     console.firebase.google.com → Votre projet → SDK Config
// ══════════════════════════════════════════════════════════════

import { initializeApp, getApps } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // ── Config Firebase de ton projet ────────────────────────────
  const firebaseConfig = {
    apiKey:            config.public.firebaseApiKey            || 'AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM',
    authDomain:        config.public.firebaseAuthDomain        || 'lycee-europe-private.firebaseapp.com',
    projectId:         config.public.firebaseProjectId         || 'lycee-europe-private',
    storageBucket:     config.public.firebaseStorageBucket     || 'lycee-europe-private.firebasestorage.app',
    messagingSenderId: config.public.firebaseMessagingSenderId || '259168134432',
    appId:             config.public.firebaseAppId             || '1:259168134432:web:470f5536d9305b4cf86345',
  }

  // Vérifie si la config est renseignée
  const isConfigured = !!(firebaseConfig.apiKey && firebaseConfig.projectId)

  // Évite la double initialisation en hot-reload
  const app = getApps().length
    ? getApps()[0]
    : initializeApp(firebaseConfig)

  return {
    provide: {
      firebase: app,
      firebaseConfigured: isConfigured,
    }
  }
})
