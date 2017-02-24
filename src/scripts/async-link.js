export default function (selector) {
  let styles = document.querySelector(selector);
  styles.media="all";
  styles.disabled=false;
}
