// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyA-PYDe1kJp2mCpk4YLy69NXSIe6BMDcoo",
    authDomain: "ibls-project-3f7f5.firebaseapp.com",
    databaseURL: "https://ibls-project-3f7f5.firebaseio.com",
    projectId: "ibls-project-3f7f5",
    storageBucket: "ibls-project-3f7f5.appspot.com",
    messagingSenderId: "280030530760"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();
