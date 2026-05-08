self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  // API は常にネットワーク優先
  if (e.request.url.includes("script.google.com")) return;

  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
