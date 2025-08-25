const CACHE_NAME = "harinfood-member-cache-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  // Pastikan tambahkan path icon jika ada (harus sesuai dengan manifest dan struktur folder Anda)
  "./icons/icon-192x192.png",
  "./icons/icon-512x512.png",
  "https://cdn.tailwindcss.com"
  // Tambahkan file lain jika ada (misal: style.css, script.js, dsb)
];

// Install Service Worker dan cache file
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activate Service Worker dan hapus cache lama jika ada versi baru
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// Fetch: Ambil dari cache dulu, jika tidak ada baru ke jaringan
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});