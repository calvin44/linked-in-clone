import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzqOqXMoktW5gzqo0cw91SthYYxG3egVQ",
    authDomain: "linkedin-78b22.firebaseapp.com",
    projectId: "linkedin-78b22",
    storageBucket: "linkedin-78b22.appspot.com",
    messagingSenderId: "439968971301",
    appId: "1:439968971301:web:fc538b298c47bac09c1dcc",
    measurementId: "G-MZJ15BJPW5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db , auth }
