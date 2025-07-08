const CACHE_NAME = 'cadastroreserva-v1';
const ASSETS = [
  '/cadastroreservas/',
  '/cadastroreservas/index.html',
  '/cadastroreservas/icon-192x192.png',
  '/cadastroreservas/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
