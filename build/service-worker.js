"use strict";var precacheConfig=[["/index.html","8bf96beacb3ce0e0a5ec405c2c0021e8"],["/static/css/main.6d232f90.css","75b7810c1124f61b2c417ff1db55c5ed"],["/static/js/main.e01cb717.js","30c63050b500eb657b0506c4db174898"],["/static/media/andrew_butler.4d30e0f7.jpg","4d30e0f7f45254a34ad08a8ccc02e09d"],["/static/media/api_3.93e37919.jpg","93e37919fe2130a917a86fde674b0013"],["/static/media/api_8.b153a868.jpg","b153a8684daee35cab24abc56e9bcff7"],["/static/media/calculator.9f2e4bde.jpg","9f2e4bde591d31e93f4d18703b2c81f8"],["/static/media/calculator_mobile.2f4de666.png","2f4de666151ab3d496bf7e262a90ada9"],["/static/media/freecodecamp.5570ebf5.png","5570ebf5846cbf219a9f2467c370a384"],["/static/media/heat_map.75e0af76.png","75e0af76b28e37be99a1857a5dac04bf"],["/static/media/heat_map_mobile.c989a93a.png","c989a93ab614acd26589b5b2c3c2c774"],["/static/media/heat_map_mobile_2.52ca0ce1.png","52ca0ce11afb6e9dccd913a00938db3e"],["/static/media/leaderboard.65699459.png","6569945903e754cf6ec7b1b72d0795bb"],["/static/media/leaderboard_mobile.30204a2e.png","30204a2ec080e2ccc104b3455cf1d512"],["/static/media/local_weather.abc8737a.jpg","abc8737ac56b35fd1e85b0a60994a0e9"],["/static/media/local_weather_mobile.30a77a9d.png","30a77a9dc4f763bc66ee5104b1c52825"],["/static/media/markdown.c5b6df3a.png","c5b6df3a8128d1b973f570a418732381"],["/static/media/markdown_mobile.adcf0785.png","adcf0785133498877dc70de094231d0f"],["/static/media/pomodoro_timer_1.5081d2f0.png","5081d2f02fc8623671230e35f1d87d7e"],["/static/media/pomodoro_timer_2.167e3908.png","167e39088eb0b596a25897af077ec78d"],["/static/media/recipe_box.5633554b.png","5633554b9ab60b0119ee844e604f052c"],["/static/media/recipe_box_mobile.a71d814c.png","a71d814c59422833d487ed21842579ff"],["/static/media/scatter_plot.2c58a789.jpg","2c58a78906b7c15cb152591b77f8e6b1"],["/static/media/simon.8f3729d1.jpg","8f3729d11807e0862f59e68f57bdfa61"],["/static/media/simon_mobile.62f17421.png","62f1742152d1d1a4e2e8aaa3763f9a9f"],["/static/media/vim_background_2.c350c440.jpg","c350c440e917d2311f230bf3ed4363b4"],["/static/media/wikipedia_viewer.349015fc.png","349015fc8b5c93d612ff73119a189633"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),a=urlsToCacheKeys.has(t));var n="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(n,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});