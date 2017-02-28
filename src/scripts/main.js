import 'whatwg-fetch';
import OfflinePlugin from 'offline-plugin/runtime';
import eventListRender from './event-list-render';
import asyncLink from './async-link';
import tRexGame from './t-rex-game';
import { validateEmail, offlineModeReady } from './utils';

OfflinePlugin.install({
  onInstalled: function() {
    offlineModeReady(1000);
  },
  onUpdating: function() {
  },
  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Enable Async Stylesheet Loading
  asyncLink('#styles');

  // Fetching the events
  fetch('https://api.minasdev.org/events').then((response) => {
    // If online: Render and save locally the event list
    response.json().then((data) => {
      eventListRender(document.querySelector('#event-tpl'), data);
      localStorage.setItem('events', JSON.stringify(data));
    });
  }).catch(() => {
    // If offline: Render the last local event list saved
    eventListRender(document.querySelector('#event-tpl'), JSON.parse(localStorage.getItem('events')))
  });

  // If offline: Enable the game and disable the newsletter form
  if (!navigator.onLine) {
    document.querySelector('body').classList.add('offline-state');
    new tRexGame('.interstitial-wrapper');
  }

  // Newsletter email validation
  document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
    let input = document.querySelector('#newsletter-form-email-input');
    input.classList.remove('bounce');
    if(!validateEmail(input.value)) {
      e.preventDefault();
      setTimeout(() => input.classList.add('bounce'), 0);
    }
  });
});
