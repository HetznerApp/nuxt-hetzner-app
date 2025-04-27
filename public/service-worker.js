const CACHE_NAME = 'my-cache-v1';
const FILES_TO_CACHE = [
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('[Service Worker] Fetch', event.request.url);

  // Handle fetch events to serve cached content
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If the request is in the cache, return it
      if (response) {
        return response;
      }

      // If the request is not in the cache, fetch it and cache it if it's a JSON, JPG, or PNG file
      return fetch(event.request).then((response) => {
        const clonedResponse = response.clone();

        // Check if the request is for a JSON, JPG, or PNG file
        if (
          event.request.url.endsWith('.json') ||
          event.request.url.endsWith('.jpg') ||
          event.request.url.endsWith('.jpeg') ||
          event.request.url.endsWith('.gif') ||
          event.request.url.endsWith('.png')
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
        }

        return response;
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
});