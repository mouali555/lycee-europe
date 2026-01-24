/*
  Service Worker — Lycée Europe
  Goal: make the site resilient (offline-first for the shell).

  Notes:
  - Cache-first for static assets (CSS/JS/images/icons)
  - Network-first for HTML documents (so updates arrive quickly)
  - Offline fallback page if navigation fails
*/

const VERSION = "le-sw-v3";
const OFFLINE_URL = "./offline.html";

// Keep the list short: it should be the minimum shell required to render something.
const CORE_ASSETS = [
  "./index.html",
  "./console.html",
  "./hub.html",
  "./about.html",
  "./contact.html",
  "./privacy.html",
  "./rules.html",
  "./offline.html",
  "./assets/css/tokens.css",
  "./assets/css/reset.css",
  "./assets/css/global.css",
  "./assets/css/components.css",
  "./assets/css/landing.css",
  "./assets/css/console.css",
  "./assets/css/legal.css",
  "./assets/js/main.js",
  "./assets/js/landing.js",
  "./assets/js/contact.js",
  "./assets/img/favicon.svg",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(VERSION);
      await cache.addAll(CORE_ASSETS);
      self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
      self.clients.claim();
    })()
  );
});

function isNavigationRequest(request) {
  return request.mode === "navigate" || (request.method === "GET" && request.headers.get("accept")?.includes("text/html"));
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // HTML pages: network-first, fallback to cache, then offline page.
  if (isNavigationRequest(request)) {
    event.respondWith(
      (async () => {
        try {
          const fresh = await fetch(request);
          const cache = await caches.open(VERSION);
          cache.put(request, fresh.clone());
          return fresh;
        } catch {
          const cached = await caches.match(request);
          return cached || (await caches.match(OFFLINE_URL));
        }
      })()
    );
    return;
  }

  // Static assets: cache-first, update in background.
  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      if (cached) {
        event.waitUntil(
          (async () => {
            try {
              const fresh = await fetch(request);
              const cache = await caches.open(VERSION);
              await cache.put(request, fresh);
            } catch {
              // ignore
            }
          })()
        );
        return cached;
      }

      const fresh = await fetch(request);
      const cache = await caches.open(VERSION);
      cache.put(request, fresh.clone());
      return fresh;
    })()
  );
});
