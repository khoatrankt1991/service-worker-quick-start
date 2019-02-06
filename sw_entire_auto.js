const cacheName = 'v1';

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove UnUsed caches (old cache name)
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Remove Old Cache');
            return caches.delete(cache);
          }
        })
      )
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const cloneResponse = res.clone();
        caches
          .open(cacheName)
          .then(cache => {
            console.log('Service Worker Caching Files from Entire requests');
            cache.put(e.request,cloneResponse);
          });
        return res;
      })
      .catch(() => caches.match(e.request))
  )
});