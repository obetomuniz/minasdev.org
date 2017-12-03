'use strict';

export default (onUpdated, onOfflineReady, onRedundant) => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker
        .register('service-worker.js', {
          useCache: false
        })
        .then(function(reg) {
          // updatefound is fired if service-worker.js changes.
          reg.onupdatefound = function() {
            var installingWorker = reg.installing;

            installingWorker.onstatechange = function() {
              switch (installingWorker.state) {
                case 'installed':
                  if (navigator.serviceWorker.controller) {
                    onUpdated();
                  } else {
                    onOfflineReady();
                  }
                  break;

                case 'redundant':
                  onRedundant();
                  break;
              }
            };
          };
        })
        .catch(function(e) {
          console.error('Error during service worker registration:', e);
        });
    });
  }
};
