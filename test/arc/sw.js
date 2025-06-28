// sw.js (can be empty)
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(self.clients.openWindow('/app/habits/habit'));
});
