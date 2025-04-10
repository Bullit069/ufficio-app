
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyBaKPm7_MiOtr5o63qWzQg2Up9XPunDMfY",
  authDomain: "app-ufficio.firebaseapp.com",
  projectId: "app-ufficio",
  storageBucket: "app-ufficio.appspot.com",
  messagingSenderId: "318495267097",
  appId: "1:318495267097:web:fb1a198e30daa177054d88"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Mostra notifica quando arriva
messaging.onBackgroundMessage(function(payload) {
  console.log("[firebase-messaging-sw.js] Messaggio ricevuto in background", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon-192.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
