import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZc-tFnu73ZPoQMF4Wsm56KszkLug1lJU",
  authDomain: "signal-clone-rn-f9476.firebaseapp.com",
  projectId: "signal-clone-rn-f9476",
  storageBucket: "signal-clone-rn-f9476.appspot.com",
  messagingSenderId: "62247718197",
  appId: "1:62247718197:web:20f44082e7c4826f62907c",
  measurementId: "G-3GES41X6RF",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
