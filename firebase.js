import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBhatrZchRCClGg113bPl5nQ74Bb2UvcZQ',
  authDomain: 'dreamy-ecommerce.firebaseapp.com',
  projectId: 'dreamy-ecommerce',
  storageBucket: 'dreamy-ecommerce.appspot.com',
  messagingSenderId: '1041088056822',
  appId: '1:1041088056822:web:ec972c8eb177d8381d4bd7',
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = firebaseApp.firestore();

export default db;
