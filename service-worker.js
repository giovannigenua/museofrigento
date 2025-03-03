self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('virtual-tour-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/script.js',
          '/images/logo.png',
          '/images/icon-192x192.png',
          '/images/icon-512x512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  