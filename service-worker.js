const CACHE_NAME = "nutrix-v3";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js",
    "./manifest.json",
    "./offline.html",

    "./pages/calculator.html",
    "./pages/calculator.js",

    "./pages/food.html",
    "./pages/food.js",

    "./pages/workout.html",
    "./pages/workout.js",

    "./pages/progress.html",
    "./pages/progress.js",
    "./pages/progress.css",

    "./pages/settings.html",
    "./pages/settings.js",
    "./pages/settings.css",

    "./assets/images/nutrix-logo.png",
    "./assets/images/nutrix-bg.png",
    "./assets/images/mee.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_FILES))
    );

    self.skipWaiting();
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        )
    );

    self.clients.claim();
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(cached => {
                if (cached) {
                    return cached;
                }

                return fetch(event.request)
                    .catch(() => {
                        if (event.request.mode === "navigate") {
                            return caches.match("./offline.html");
                        }
                    });
            })
    );
});