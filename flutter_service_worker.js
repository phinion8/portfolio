'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7db3810f2d2b906beca9d0fa5f9c6a8b",
"assets/AssetManifest.json": "0d03a2bd81d768d4f9bec837d3f74d7f",
"assets/assets/animations/contact_anim.json": "d4c7340afca4034eb945ff44e05c7cde",
"assets/assets/animations/main_page_anim.json": "ada5cbbe628a7911c85048a2c162dd01",
"assets/assets/animations/single_mobile_app_anim.json": "7c461273c4c2ebb553e3be6a953735a3",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/3d_computer.png": "d0ef4f52df1e6aa1d0655e31670c3fca",
"assets/assets/images/3d_illustration.png": "3c156ad43d8dbb7621762a0b75617cae",
"assets/assets/images/android_studio_icon.png": "88ed160d0224e293c6a4c4ca1a76c426",
"assets/assets/images/briefcase.png": "ae776bd7b2b1d6eb454a9cfabb0d95c5",
"assets/assets/images/contact_illustration.svg": "07d8ff4aa2895e166d5d188721825ffe",
"assets/assets/images/css_logo.png": "b7eb4030946e94e375f674ee670a1c8b",
"assets/assets/images/dart_icon.png": "6446d3024149e0ed1d46de86686cc38a",
"assets/assets/images/dashboard.png": "01243bcdcbcc72c270c19030eafe11bd",
"assets/assets/images/figma_logo.jpg": "b85b93e5ff0d2a8b1a322c1a9ba4fab0",
"assets/assets/images/firebase_logo.png": "c24b6b9c0fcd84c7b258879880472660",
"assets/assets/images/fiverr.png": "1e92c83913f819a0d6d573c9766e42fe",
"assets/assets/images/flutter_logo.png": "0dab7232a7f4d8d3a5ab56f870d3ae58",
"assets/assets/images/github.png": "f3b32b31be25ba1b50eb092530be56b5",
"assets/assets/images/google-play.png": "dc6d34239efe6e011b684db3a8376c9b",
"assets/assets/images/google.png": "baa58fbc1529cfdee811fd2cd6ad9a14",
"assets/assets/images/html_logo.png": "2dd76ac7cd918c601ae1e66f964df983",
"assets/assets/images/javascript_logo.png": "0cded3a3276425911d55a2552bf361bf",
"assets/assets/images/java_icon.png": "4eb1819dc863ef386e09d86e9f482a9f",
"assets/assets/images/kotlin_Icon.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/images/linkedin.png": "c047ede27721531a99efdf33b23e5cd2",
"assets/assets/images/logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/mongo_db.png": "90a8f550f701319d63f55851a58dfb67",
"assets/assets/images/my_photo.jpeg": "6a39b84d937b178f6edb467f22daedec",
"assets/assets/images/node_logo.png": "bf6bdd7caa83e0cb664d280d3f4a3972",
"assets/assets/images/portfolio_logo.png": "9b395af300a53b1db1f930d09d32613c",
"assets/assets/images/react_js_logo.png": "76bded982908e31a1134f24193aa7c8d",
"assets/assets/images/youtube.png": "ec1efab49c24be248d8ee984df407508",
"assets/FontManifest.json": "f1da79d9a6b292a483b14ba311c81f25",
"assets/fonts/MaterialIcons-Regular.otf": "620f8b2f28f6adca439cf8b0c27bf5cd",
"assets/NOTICES": "1c83b8e0a48deadedef5e8b116ea1cc0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9aaa7ebae6cd10d6a7a9e6692135dfb5",
"assets/packages/social_media_buttons/fonts/SocialMediaIcons.ttf": "be271838cfb555093a41e12292acce83",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "9b395af300a53b1db1f930d09d32613c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/img.png": "0e38f0d834ec2d6eb5d3ccecb4165d83",
"index.html": "bc8f45507a9ffa9fc1ab4e99b51a72a3",
"/": "bc8f45507a9ffa9fc1ab4e99b51a72a3",
"main.dart.js": "ac37eff0f8838a02c67949573af010e2",
"manifest.json": "9583ebe54188295a4768ae1aa040030b",
"version.json": "cc1fa9cce5af273c0909d105387fee89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
