var paths = [
		'manifest.json',
		'index.html',
		'menu.html',
		'betamaze.html',
		'betamaze.png',
		'baudot.html',
		'braille.html',
		'dotsies.html',
		'dotsies.png',
		'herbin.html',
		'herbin.png',
		'danse.html',
		'danse.png',
		'blank30.png',
		'morse.html',
		'pavillon.html',
		'pavillon.png',
		'blank50x50.png',
		'phonetique.html',
		'pigpen.html',
		'pigpen.png',
		'quipu.html',
		'quipu.png',
		'rimbaud.html',
		'runes.html',
		'runes.png',
		'scrabble.html',
		'semaphore.html',
		'semaphore.png',
		'blank.png',
		'telegraphe.html',
		'telegraphe.png',
		'noces.html',
		'patrons.html',
		'saints.html',
		'zodiaque.html',
		'chinois.html',
		'cartes.html',
		'cesar.html',
		'fleurs.html',
		'nains.html',
		'rennes.html',
		'france-carte.html',
		'carte.png',
		'quartiers.html',
		'france-departements.html',
		'pays.html',
		'aeroports.html',
		'drapeaux.html',
		'drapeaux.png',
		'blank55x40.png',
		'usa.html',
		'rome.html',
		'merveilles.html',
		'sages.html',
		'muses.html',
		'hercule.html',
		'elements.html',
		'resistances.html',
		'lactee.html',
		'lactee.png',
		'blank25x25.png',
        'https://unpkg.com/onsenui/css/onsenui.min.css',
        'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
        'https://unpkg.com/onsenui/js/onsenui.min.js',
		'https://unpkg.com/onsenui/css/ionicons/css/ionicons.min.css',
		'https://unpkg.com/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
		'https://unpkg.com/onsenui/css/font_awesome/css/font-awesome.min.css',
		'https://unpkg.com/onsenui/css/onsenui.css',
      ];


// All ServiceWorker code must be inside events.

self.addEventListener('activate', function(e) {
	console.log('service worker activated');
});

self.addEventListener('install', function(e) {
  console.log('installing the cached files...');

  e.waitUntil(

    caches.open('vademecumpwa').then(cache => {
		console.log('loading the cached files...');

	var status = cache.addAll(paths);
	console.log('caching status '+status);
	 return status;
    })
  );
});


self.addEventListener('fetch', function(e) {
	console.log("fetching ...");
  e.respondWith(
    caches.match(e.request)
      .then(function(response) {
			if(response)
				{
				console.log("  returning cached version of "+e.request.url);
				return response;
				}
			else
				{
				console.log("  fetching through network "+e.request.url);
				return fetch(e.request);
				}
		}
	)
	);
});
