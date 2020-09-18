import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3cFUbkSmWAbEOmb-2o_zRbbOaWKh2wZQ",
  authDomain: "clone-72603.firebaseapp.com",
  databaseURL: "https://clone-72603.firebaseio.com",
  projectId: "clone-72603",
  storageBucket: "clone-72603.appspot.com",
  messagingSenderId: "926899963763",
  appId: "1:926899963763:web:00feaecd133ccf54fd2706",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
