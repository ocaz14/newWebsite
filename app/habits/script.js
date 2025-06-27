if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/app/habits/service-worker.js')
    .then(() => console.log("Service Worker registered"))
    .catch(err => console.error("Service Worker registration failed:", err));
}
