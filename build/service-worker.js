"use strict";var precacheConfig=[["/portfolio/index.html","d5945072783ddd8491b2bb7cbed433e5"],["/portfolio/static/css/main.f22ac549.css","57cf0c0383103909cdf49227f01cb2dc"],["/portfolio/static/js/main.e2a37135.js","642d3bf936b7026c2d68c78a92f4e2d3"],["/portfolio/static/media/andrew_butler.4d30e0f7.jpg","4d30e0f7f45254a34ad08a8ccc02e09d"],["/portfolio/static/media/api_3.93e37919.jpg","93e37919fe2130a917a86fde674b0013"],["/portfolio/static/media/api_8.b153a868.jpg","b153a8684daee35cab24abc56e9bcff7"],["/portfolio/static/media/calculator.9f2e4bde.jpg","9f2e4bde591d31e93f4d18703b2c81f8"],["/portfolio/static/media/calculator_mobile.2f4de666.png","2f4de666151ab3d496bf7e262a90ada9"],["/portfolio/static/media/freecodecamp.5570ebf5.png","5570ebf5846cbf219a9f2467c370a384"],["/portfolio/static/media/heat_map.75e0af76.png","75e0af76b28e37be99a1857a5dac04bf"],["/portfolio/static/media/heat_map_mobile.c989a93a.png","c989a93ab614acd26589b5b2c3c2c774"],["/portfolio/static/media/heat_map_mobile_2.52ca0ce1.png","52ca0ce11afb6e9dccd913a00938db3e"],["/portfolio/static/media/leaderboard.65699459.png","6569945903e754cf6ec7b1b72d0795bb"],["/portfolio/static/media/leaderboard_mobile.30204a2e.png","30204a2ec080e2ccc104b3455cf1d512"],["/portfolio/static/media/local_weather.abc8737a.jpg","abc8737ac56b35fd1e85b0a60994a0e9"],["/portfolio/static/media/local_weather_mobile.30a77a9d.png","30a77a9dc4f763bc66ee5104b1c52825"],["/portfolio/static/media/markdown.c5b6df3a.png","c5b6df3a8128d1b973f570a418732381"],["/portfolio/static/media/markdown_mobile.adcf0785.png","adcf0785133498877dc70de094231d0f"],["/portfolio/static/media/pomodoro_timer_1.5081d2f0.png","5081d2f02fc8623671230e35f1d87d7e"],["/portfolio/static/media/pomodoro_timer_2.167e3908.png","167e39088eb0b596a25897af077ec78d"],["/portfolio/static/media/recipe_box.5633554b.png","5633554b9ab60b0119ee844e604f052c"],["/portfolio/static/media/recipe_box_mobile.a71d814c.png","a71d814c59422833d487ed21842579ff"],["/portfolio/static/media/scatter_plot.2c58a789.jpg","2c58a78906b7c15cb152591b77f8e6b1"],["/portfolio/static/media/simon.8f3729d1.jpg","8f3729d11807e0862f59e68f57bdfa61"],["/portfolio/static/media/simon_mobile.62f17421.png","62f1742152d1d1a4e2e8aaa3763f9a9f"],["/portfolio/static/media/vim_background_2.c350c440.jpg","c350c440e917d2311f230bf3ed4363b4"],["/portfolio/static/media/wikipedia_viewer.349015fc.png","349015fc8b5c93d612ff73119a189633"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var o="/portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(o,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});