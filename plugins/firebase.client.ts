import { getApps, initializeApp, type FirebaseOptions } from 'firebase/app'

// Existing public client configuration. These identifiers are not service-account
// credentials; Firebase security rules control access to the project data.
const defaultConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCpo7up--nfVG4zj_Zeu4kB7pr34ad4ceM',
  authDomain: 'lycee-europe-private.firebaseapp.com',
  projectId: 'lycee-europe-private',
  storageBucket: 'lycee-europe-private.firebasestorage.app',
  messagingSenderId: '259168134432',
  appId: '1:259168134432:web:470f5536d9305b4cf86345',
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public
  const customConfig: FirebaseOptions = {
    apiKey: String(config.firebaseApiKey || '').trim(),
    authDomain: String(config.firebaseAuthDomain || '').trim(),
    projectId: String(config.firebaseProjectId || '').trim(),
    storageBucket: String(config.firebaseStorageBucket || '').trim(),
    messagingSenderId: String(config.firebaseMessagingSenderId || '').trim(),
    appId: String(config.firebaseAppId || '').trim(),
  }
  const hasOverrides = Object.values(customConfig).some(Boolean)
  // Treat custom projects as a complete configuration: mixing the old project's
  // key or bucket into a new project can connect authentication and uploads to
  // different backends.
  const firebaseConfig = hasOverrides ? customConfig : defaultConfig
  const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId)
  if (!isConfigured) {
    console.warn('[Firebase] Client configuration is incomplete; authentication is unavailable.')
    return { provide: { firebase: null, firebaseConfigured: false } }
  }

  try {
    // A named Firebase app may belong to another integration. Reuse only this
    // default app during Nuxt hot reloads.
    const app = getApps().find(existing => existing.name === '[DEFAULT]') || initializeApp(firebaseConfig)
    return { provide: { firebase: app, firebaseConfigured: true } }
  } catch {
    console.warn('[Firebase] Initialization failed; authentication is unavailable.')
    return { provide: { firebase: null, firebaseConfigured: false } }
  }
})