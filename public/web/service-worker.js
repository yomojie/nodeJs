"use strict";importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),importScripts("https://static.60kg.top/web/precache-manifest.734f692ae8acfa6edf92a782f32b2c69.js"),self.addEventListener("message",function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),workbox.core.clientsClaim(),self.__precacheManifest=[].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("https://static.60kg.top/web/index.html"),{blacklist:[/^\/_/,/\/[^/?]+\.[^/]+$/]});