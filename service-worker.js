self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/', // La home
                '/index.html', // La tua pagina principale
                '/style.css', // Eventuali file CSS
                '/script.js', // Eventuali file JS
                '/manifest.json', // Il manifesto
                '/icons/icon-192x192.png', // Icona della PWA
                '/icons/icon-512x512.png'  // Icona della PWA
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
