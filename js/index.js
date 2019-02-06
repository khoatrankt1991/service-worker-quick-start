// check brower support service worker
if (navigator.serviceWorker) {
  console.log('Service Worker Supported');
  window.addEventListener('load', () => {
    console.log('event listener load');
    navigator.serviceWorker.register('../sw_entire_auto.js').then(r => {
      console.log('Service Worker: Registered');
    }).catch(err => console.log('Service Worker: ERROR', err));
  })
}