// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3DPkzwMyh464cySc841MsABVksWQwMV0",
  authDomain: "ethereal-runner-414217.firebaseapp.com",
  projectId: "ethereal-runner-414217",
  storageBucket: "ethereal-runner-414217.appspot.com",
  messagingSenderId: "64381024100",
  appId: "1:64381024100:web:6cd76be3ea05d0387a2c71",
  measurementId: "G-ZXF2ENEZ62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);