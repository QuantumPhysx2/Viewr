var CACHE_TITLE = "my-site-cache";
var CACHE_VERSION = "v1";
var CACHE_NAME = CACHE_TITLE + "-" + CACHE_VERSION;
var urlsToCache = [
  // In this array, we list all the files we want to include for our service worker
  "/",
  "css/Style.css",
  "https://www.amcharts.com/lib/3/ammap.js",
  "https://www.amcharts.com/lib/3/maps/js/worldLow.js",
  "js/main.js",
  "js/mapControls.js"
];

self.addEventListener("install", function(evt) {
  evt.waitUntil(
    // This function requries a cache parameter that is used to return a promise
    caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log("Cache Opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(evt) {
  evt.respondWith(
    caches.match(evt.request)
    .then(function(response) {
      if(response) {
        console.log("Offline Fetch Success! Your page now works offline");
        return response;
      }
      return fetch(evt.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(cacheName !== CACHE_NAME && cacheName.indexOf(CACHE_TITLE) === 0) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
