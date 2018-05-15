// 1. Save the files to the user's device
// The "install" event is called when the ServiceWorker starts up.
// All ServiceWorker code must be inside events.

self.addEventListener('install', function(e) {
  console.log('installing the cached files...');

  // waitUntil we have cached all of our files

  e.waitUntil(

    caches.open('vademecumpwa').then(cache => {
		console.log('loading the cached files...');
      // If any of these resources fails, _none_ will be added to the cache !

	var status = cache.addAll([
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
		'saints.html',
		'zodiaque.html',
		'chinois.html',
		'cartes.html',
		'cesar.html',
		'fleurs.html',
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
		'merveilles.html',
		'muses.html',
		'hercule.html',
		'elements.html',
		'resistances.html',
		'lactee.html',
		'lactee.png',
		'blank25x25.png',
        'https://unpkg.com/onsenui/css/onsenui.min.css',
        'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
        'https://unpkg.com/onsenui/js/onsenui.min.js'
      ]);
	console.log('status '+status);
	 return status;
    })
  );
});

// 2. Intercept requests and return the cached version instead

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      // Return the cached file, or else try to get it from the server
      .then(response => response || fetch(e.request))
  );
});
