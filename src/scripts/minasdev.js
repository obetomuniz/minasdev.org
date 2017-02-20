import 'whatwg-fetch';
import Handlebars from 'handlebars';
import format from 'date-fns/format';

Handlebars.registerHelper('formatDate', function(date) {
  return format(date, 'DD.MM');
});

window.addEventListener('load', () =>{
  const template = document.querySelector('#event-tpl');

  fetch('https://api.minasdev.org/events').then((response) => {
    response.json().then((data) => renderEvents(template, data));
  });

});

function renderEvents (template, events) {
  const render = Handlebars.compile(template.innerHTML);
  const html = render(events);
  template.parentNode.insertAdjacentHTML('beforeend', html);
}
