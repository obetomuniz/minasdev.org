import 'whatwg-fetch';
import OfflinePlugin from 'offline-plugin/runtime';
import EventListRender from './EventListRender';
import TRexGame from './TRexGame';
import { validateEmail, offlineModeReady } from './Utils';

OfflinePlugin.install({
  onInstalled: function() {
    offlineModeReady();
  },
  onUpdating: function() {
  },
  onUpdateReady: function() {
    OfflinePlugin.applyUpdate();
  },
  onUpdated: function() {
    // window.location.reload();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // If offline: Enable the game and disable the newsletter form
  if (!navigator.onLine) {
    document.querySelector('body').classList.add('offline-state');
    new TRexGame('.interstitial-wrapper');
  }

  // Fetching the events
  fetch('https://api.minasdev.org/events').then((response) => {
    // If online: Render and save locally the event list
    response.json().then((events) => {
      EventListRender(document.querySelector('#event-tpl'), events);
      localStorage.setItem('events', JSON.stringify(events));
    });
  }).catch(() => {
    // If offline: Render the last local event list saved
    EventListRender(document.querySelector('#event-tpl'), events)
  });
});

// Newsletter email validation
document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
  let input = document.querySelector('#newsletter-form-email-input');
  input.classList.remove('bounce');
  if(!validateEmail(input.value)) {
    e.preventDefault();
    setTimeout(() => input.classList.add('bounce'), 0);
  }
});
