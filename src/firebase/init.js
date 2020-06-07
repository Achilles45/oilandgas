import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCV3I0i2tD6_03KmlhdF24_adsTwmkloZk",
  authDomain: "oil-and-gas-f461b.firebaseapp.com",
  databaseURL: "https://oil-and-gas-f461b.firebaseio.com",
  projectId: "oil-and-gas-f461b",
  storageBucket: "oil-and-gas-f461b.appspot.com",
  messagingSenderId: "67962466179",
  appId: "1:67962466179:web:dcb52e818568ff762f10b6",
  measurementId: "G-881PXBK4D0"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();