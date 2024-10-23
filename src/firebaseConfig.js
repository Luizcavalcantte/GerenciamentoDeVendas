// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOrhcLAAGq8V1hUlYnSJcZP1Nm9uxtUB8',
  authDomain: 'meus-estabelecimentos.firebaseapp.com',
  projectId: 'meus-estabelecimentos',
  storageBucket: 'meus-estabelecimentos.appspot.com',
  messagingSenderId: '1022710222188',
  appId: '1:1022710222188:web:dff1139b67529f1c40b749',
  measurementId: 'G-35X37EE7YK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
