self.addEventListener('install', event =>{

  console.log('Service Worker installed');

});

self.addEventListener('fetch', event => {

  console.log('You fetched $(event.target.url)


});