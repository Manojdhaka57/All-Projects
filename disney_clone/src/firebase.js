


import { initializeApp } from "firebase/app";
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDZJB9hSsK7Ssw7iT2JwHYJkGVL38gIL6c",
  authDomain: "disneyclone-clone.firebaseapp.com",
  projectId: "disneyclone-clone",
  storageBucket: "disneyclone-clone.appspot.com",
  messagingSenderId: "97437179914",
  appId: "1:97437179914:web:9b6010f05ec8d25782fff3"
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
