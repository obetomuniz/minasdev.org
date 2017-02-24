import Handlebars from 'handlebars';
import format from 'date-fns/format';

Handlebars.registerHelper('formatDate', function(date) {
  return format(date, 'DD.MM');
});

export default function (template, events) {
  const render = Handlebars.compile(template.innerHTML);
  const html = render(events);
  template.parentNode.insertAdjacentHTML('beforeend', html);
}
