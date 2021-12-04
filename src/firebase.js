// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfyMhrAZsikZq_V4oL8WFl8qOdMdwdUmw",
  authDomain: "chat-4f54e.firebaseapp.com",
  databaseURL: "https://chat-4f54e-default-rtdb.firebaseio.com",
  projectId: "chat-4f54e",
  storageBucket: "chat-4f54e.appspot.com",
  messagingSenderId: "246502519450",
  appId: "1:246502519450:web:b0ed1cfed4980b43826523",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
