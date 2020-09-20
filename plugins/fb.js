// Firebase authentication
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDI7UiPwA_I0S6ZCEXUlBLJC0F0S-oHSu4",
  authDomain: "fir-auth-744a4.firebaseapp.com",
  databaseURL: "https://fir-auth-744a4.firebaseio.com",
  projectId: "fir-auth-744a4",
  storageBucket: "fir-auth-744a4.appspot.com",
  messagingSenderId: "765351641369",
  appId: "1:765351641369:web:239f7931de6b8a136e8588",
  measurementId: "G-CW3V6XGK8G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Creating constants we can use in other scripts
const db = firebase.firestore();
const auth = firebase.auth();

export default { db, auth };
