// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX5gF0PXpHA93W8hgM4ssbF9Rpjzcs3ow",
  authDomain: "my-dropbox-c6e9a.firebaseapp.com",
  projectId: "my-dropbox-c6e9a",
  storageBucket: "my-dropbox-c6e9a.firebasestorage.app",
  messagingSenderId: "946954813452",
  appId: "1:946954813452:web:cc8cb90835316c462c6e29",
  measurementId: "G-D6QH7DSP63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);