self.addEventListener('install', e => {
  console.log('✅ Service Worker Installed');
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('✅ Service Worker Activated');
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clientsArr => {
      for (const client of clientsArr) {
        if (client.url.includes('/app/habits/habit') && 'focus' in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow('/app/habits/habit');
    })
  );
});