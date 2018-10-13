// Service Worker script provided by Week 6 slides + MDN and other resources
// WARNING: The Service Worker file NEEDS to be in the 'root' directory to work
var CACHE_TITLE = 'my-site-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  "index.html",
  "css/Style.css",
  "css/images/PageIcon.ico",
  "css/images/PageLogo.jpg",
  "css/images/PageLogoMobile.jpg",
  "js/main.js",
  "js/mapControls.js",
];

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(caches.match(event.request)
    .then(function(response) {
      if (response) {
        console.log("Offline Fetch Success");
        return response;
      }
      return fetch(event.request);
    }
  )
);
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(cacheName) {
          if(cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
