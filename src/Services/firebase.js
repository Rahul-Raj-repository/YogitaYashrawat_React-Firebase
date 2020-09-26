import * as firebase from "firebase/app"
import 'firebase/analytics';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/firebase-app';
import 'firebase/firebase-storage'; 

var firebaseConfig = {
  apiKey: "AIzaSyDz1M23jLO-4cQBH7lftlHB3gOZoGPaeyc",
  authDomain: "yogita-yashrawat.firebaseapp.com",
  databaseURL: "https://yogita-yashrawat.firebaseio.com",
  projectId: "yogita-yashrawat",
  storageBucket: "yogita-yashrawat.appspot.com",
  messagingSenderId: "382454683201",
  appId: "1:382454683201:web:d8e0d8919586e1964dd8c0",
  measurementId: "G-YQHRG0RW29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig).firestore();
firebase.analytics();
firebase.firestore().settings({
  timestampsInSnapshots: true
})

  export default firebase;