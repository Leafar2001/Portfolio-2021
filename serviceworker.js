// const cacheName = "cache-v1";
// const appFiles = [
//   "./index.html",
//   "./manifest.webmanifest",
//   "./src/css/main.min.css",
//   "./src/js/main.js",
// ];

self.addEventListener("install", (installing) => {
  // installing.waitUntil(
  //   caches.open(cacheName).then((cache) => {
  //     return cache.addAll(appFiles);
  //   })
  // );
});

self.addEventListener("activate", (activating) => {});

self.addEventListener("fetch", (fetching) => {
  // fetching.respondWith(
  //   caches.match(fetching.request.url).then((response) => {
  //     console.log("Service Worker: Fetching resource " + fetching.request.url);
  //     return (
  //       response ||
  //       fetch(fetching.request)
  //         .then((response) => {
  //           console.log(
  //             "Service Worker: Resource " +
  //               fetching.request.url +
  //               " not available in cache"
  //           );
  //           return caches.open(cacheName).then((cache) => {
  //             console.log(
  //               "Service Worker: Caching (new) resource " + fetching.request.url
  //             );
  //             cache.put(fetching.request, response.clone());
  //             return response;
  //           });
  //         })
  //         .catch(function () {
  //           console.log("Service Worker: Fetching online failed.");
  //         })
  //     );
  //   })
  // );
});

self.addEventListener("push", (pushing) => {});
