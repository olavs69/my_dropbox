import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX5gF0PXpHA93W8hgM4ssbF9Rpjzcs3ow",
  authDomain: "my-dropbox-c6e9a.firebaseapp.com",
  databaseURL: "https://my-dropbox-c6e9a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-dropbox-c6e9a",
  storageBucket: "my-dropbox-c6e9a.firebasestorage.app",
  messagingSenderId: "946954813452",
  appId: "1:946954813452:web:cc8cb90835316c462c6e29",
  measurementId: "G-D6QH7DSP63"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider, analytics, db };