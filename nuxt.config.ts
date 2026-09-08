// nuxt.config.ts — Lycée Europe v2.0
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineNuxtConfig({
  devtools: { enabled: true },

  // CSS principal (design system)
  css: ['~/assets/css/main.css'],

  // Pas de PostCSS/Tailwind — CSS natif uniquement
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  // Routeur basé sur le dossier pages/
  pages: true,

  // Variables d'environnement accessibles côté client
  runtimeConfig: {
    public: {
      firebaseApiKey:            process.env.NUXT_PUBLIC_FIREBASE_API_KEY            || '',
      firebaseAuthDomain:        process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN        || '',
      firebaseProjectId:         process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID         || '',
      firebaseStorageBucket:     process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET     || '',
      firebaseMessagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
      firebaseAppId:             process.env.NUXT_PUBLIC_FIREBASE_APP_ID             || '',
    }
  },

  // SSR désactivé — site SPA (idéal pour GitHub Pages)
  ssr: false,

  // Workaround pour le bug IPC Nuxt 3.21.x sous Windows
  experimental: {
    asyncContext: false,
  },

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
      }
    }
  },

  // Nitro : output vers /docs pour GitHub Pages
  nitro: {
    output: {
      publicDir: resolve(__dirname, 'docs')
    }
  },

  // App head global
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#7c3aed' },
        { name: 'description', content: 'Lycée Europe — Établissement d\'excellence. Espace numérique élève.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    }
  }
})