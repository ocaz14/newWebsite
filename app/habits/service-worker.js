const CACHE_NAME = 'habits-v1';
const URLS_TO_CACHE = [
  '/app/habits/',
  '/app/habits/index.html',
  '/app/habits/manifest.json',
  '/app/habits/script.js',
  '/app/habits/icons/icon-192.png',
  '/app/habits/icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
