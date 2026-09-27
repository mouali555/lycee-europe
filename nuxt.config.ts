// nuxt.config.ts — Lycée Europe v2.0
export default defineNuxtConfig({
  devtools: { enabled: false },
  compatibilityDate: '2024-04-03',

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

  // App head global
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        { name: 'description', content: 'Lycée Europe — Plateforme créative et communautaire à Dunkerque.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
        },
      ],
    }
  }
})
