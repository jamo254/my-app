// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTfTi73q5F3psUqHNZbj5ynXbZ7g7mAAs",
    authDomain: "tinder-like-b2ba2.firebaseapp.com",
    projectId: "tinder-like-b2ba2",
    storageBucket: "tinder-like-b2ba2.appspot.com",
    messagingSenderId: "239904546853",
    appId: "1:239904546853:web:7960e6ba7670e218a31fcc",
    measurementId: "G-V5K253QQNY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database =  firebaseApp.firestore();

  export default database;