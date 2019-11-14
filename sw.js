var cacheName = 'helloWorld'
console.log('Hello from sw.js');

//install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      'index.html'
    ]))
  )
})

// activate
self.addEventListener('activate', event => {
	console.log('now ready to handle fetches!');
	  event.waitUntil(
		caches.keys().then(function(cacheNames) {
			var promiseArr = cacheNames.map(function(item) {
				if (item !== cacheName) {
					// Delete that cached file
					return caches.delete(item);
				}
			})
			return Promise.all(promiseArr);
		})
	); // end e.waitUntil
});

//fetch
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
	})
  )
})

if(window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', function(event) {
  var a = document.getElementById('alpha'),
        b = document.getElementById('beta'),
        g = document.getElementById('gamma'),
        alpha = event.alpha,
        beta = event.beta,
        gamma = event.gamma;

  a.innerHTML = Math.round(alpha);
  b.innerHTML = Math.round(beta);
  g.innerHTML = Math.round(gamma);

    }, false);
}else{
    document.querySelector('body').innerHTML = '你的瀏覽器不支援喔！';
}




