import 'whatwg-fetch';
import OfflinePlugin from 'offline-plugin/runtime';
import eventListRender from './event-list-render';
import asyncLink from './async-link';
import tRexGame from './t-rex-game';

OfflinePlugin.install({
  onInstalled: function() {
    console.log('onInstalled');
  },
  onUpdating: function() {
    console.log('onUpdating');
  },
  onUpdateReady: function() {
    console.log('onUpdateReady');
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    console.log('onUpdated');
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  asyncLink('#styles');

  fetch('https://api.minasdev.org/events').then((response) => {
    response.json().then((data) => {
      eventListRender(document.querySelector('#event-tpl'), data);
      localStorage.setItem('events', JSON.stringify(data));
    });
  }).catch(() => {
    eventListRender(document.querySelector('#event-tpl'), JSON.parse(localStorage.getItem('events')))
  });

  if (!navigator.onLine) {
    document.querySelector('#newsletter').style.display = 'none';
    document.querySelector('#game').style.display = 'block';
    new tRexGame('.interstitial-wrapper');
  }
});
