import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBlQ4tjL8C5kKmCg6wPLpigpxr2v8z713o",
  authDomain: "messenger-980da.firebaseapp.com",
  projectId: "messenger-980da",
  databaseURL: 'https://messenger-980da-default-rtdb.europe-west1.firebasedatabase.app/',
  storageBucket: "messenger-980da.appspot.com",
  messagingSenderId: "477475510355",
  appId: "1:477475510355:web:a090a5c5f1b5628b4e0ea6",
  measurementId: "G-TR070M2LJW"
})

export const db = firebase.firestore();