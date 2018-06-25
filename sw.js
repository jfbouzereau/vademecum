var paths = [
		'/vademecum/',
		'/vademecum/manifest.json',
		'/vademecum/index.html',
		'/vademecum/menu.html',
		'/vademecum/betamaze.html',
		'/vademecum/betamaze.png',
		'/vademecum/baudot.html',
		'/vademecum/braille.html',
		'/vademecum/dotsies.html',
		'/vademecum/dotsies.png',
		'/vademecum/herbin.html',
		'/vademecum/herbin.png',
		'/vademecum/danse.html',
		'/vademecum/danse.png',
		'/vademecum/blank30.png',
		'/vademecum/morse.html',
		'/vademecum/pavillon.html',
		'/vademecum/pavillon.png',
		'/vademecum/blank50x50.png',
		'/vademecum/phonetique.html',
		'/vademecum/pigpen.html',
		'/vademecum/pigpen.png',
		'/vademecum/quipu.html',
		'/vademecum/quipu.png',
		'/vademecum/rimbaud.html',
		'/vademecum/runes.html',
		'/vademecum/runes.png',
		'/vademecum/scrabble.html',
		'/vademecum/semaphore.html',
		'/vademecum/semaphore.png',
		'/vademecum/blank.png',
		'/vademecum/telegraphe.html',
		'/vademecum/telegraphe.png',
		'/vademecum/noces.html',
		'/vademecum/patrons.html',
		'/vademecum/saints.html',
		'/vademecum/zodiaque.html',
		'/vademecum/chinois.html',
		'/vademecum/cartes.html',
		'/vademecum/cesar.html',
		'/vademecum/fleurs.html',
		'/vademecum/france-carte.html',
		'/vademecum/carte.png',
		'/vademecum/quartiers.html',
		'/vademecum/france-departements.html',
		'/vademecum/pays.html',
		'/vademecum/aeroports.html',
		'/vademecum/drapeaux.html',
		'/vademecum/drapeaux.png',
		'/vademecum/blank55x40.png',
		'/vademecum/usa.html',
		'/vademecum/merveilles.html',
		'/vademecum/muses.html',
		'/vademecum/hercule.html',
		'/vademecum/elements.html',
		'/vademecum/resistances.html',
		'/vademecum/lactee.html',
		'/vademecum/lactee.png',
		'/vademecum/blank25x25.png',
        'https://unpkg.com/onsenui/css/onsenui.min.css',
        'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
        'https://unpkg.com/onsenui/js/onsenui.min.js',
		'https://unpkg.com/onsenui/css/ionicons/css/ionicons.min.css',
		'https://unpkg.com/onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css',
		'https://unpkg.com/onsenui/css/font_awesome/css/font-awesome.min.css'
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
