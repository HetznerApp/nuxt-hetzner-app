// Install event
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
  });
  
  // Activate event
  self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
  });
  
  // Fetch event
  self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching', event.request.url);
  });