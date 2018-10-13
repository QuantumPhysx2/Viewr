var CACHE_TITLE = "my-site-cache";
var CACHE_VERSION = "v1";
var CACHE_NAME = CACHE_TITLE + "-" + CACHE_VERSION;
var urlsToCache = [
  // In this array, we list all the files we want to include for our service worker
  "/",
  "/css/Style.css",
  "/js/main.js",
  "/js/mapControls.js"
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
