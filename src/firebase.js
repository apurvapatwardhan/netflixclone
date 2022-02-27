// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2gg_DSFcZ6TYi1s4LveFtg79BQrek0sY",
  authDomain: "netflix-clone-55c5e.firebaseapp.com",
  projectId: "netflix-clone-55c5e",
  storageBucket: "netflix-clone-55c5e.appspot.com",
  messagingSenderId: "981973836152",
  appId: "1:981973836152:web:36ed2fd18dd4f9848aa88d",
  measurementId: "G-RFSJ49Q4V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);