export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function offlineModeReady(delay) {
    // alert('cached!');
    document.querySelector('body').classList.add('offline-mode-ready');
    setTimeout(() => document.querySelector('body').classList.remove('offline-mode-ready'), delay);
}
