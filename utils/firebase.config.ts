// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCitpJRKq7sHN-n9BJ1TM1dVj3lrAOJh1Q",
  authDomain: "penchowth.firebaseapp.com",
  projectId: "penchowth",
  storageBucket: "penchowth.appspot.com",
  messagingSenderId: "44982815468",
  appId: "1:44982815468:web:c5e7910e621f4c805033c9",
  measurementId: "G-M947GGXL25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};