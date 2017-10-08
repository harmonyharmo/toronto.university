var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', function (event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('Finally active. Ready to start serving content!');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});

self.addEventListener('push', function (event) {
  var title = 'Yay a message.';
  var body = 'We have received a push message.';
  var icon = '/images/smiley.svg';
  var tag = 'simple-push-example-tag';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});
