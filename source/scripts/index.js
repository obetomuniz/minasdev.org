import 'whatwg-fetch';
import OfflinePlugin from 'offline-plugin/runtime';
import { validateEmail } from './lib/helpers';
import EventListRender from './lib/event-list';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#minasdev-newsletter-form').addEventListener('submit', e => {
    const input = document.querySelector('#minasdev-newsletter-email');
    input.classList.remove('newsletter__email--error');
    if (!validateEmail(input.value)) {
      e.preventDefault();
      setTimeout(() => input.classList.add('newsletter__email--error'), 0);
    }
  });

  if (!navigator.onLine) {
    document.querySelector('body').classList.add('offline-mode');
  }

  OfflinePlugin.install({
    onInstalled() {
      console.log('Installed!');
      document.querySelector('body').classList.add('offline-mode-ready');
    },
    onUpdating() {
      console.log('Updating...');
    },
    onUpdateReady() {
      console.log('Update Ready!');
      OfflinePlugin.applyUpdate();
    },
    onUpdated() {
      console.log('Updated!');
      // window.location.reload();
    }
  });

  fetch('https://api.minasdev.org/events', { cache: 'reload' })
    .then(response => {
      // If online: Render and save locally the event list
      response.json().then(events => {
        localStorage.setItem('events', JSON.stringify(events));
        EventListRender(document.querySelector('#events-list'), document.querySelector('#event-template'), events);
      });
    })
    .catch(() => {
      // If offline: Render the last local event list saved
      EventListRender(document.querySelector('#events-list'), document.querySelector('#event-template'), JSON.parse(localStorage.getItem('events')));
    });
});
