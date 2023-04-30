// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuHJSxXUH7J1I_8w7LH0RdiObue83gcFo",
  authDomain: "assm-14a68.firebaseapp.com",
  projectId: "assm-14a68",
  storageBucket: "assm-14a68.appspot.com",
  messagingSenderId: "567453331762",
  appId: "1:567453331762:web:0bc16b2c885fd236c3a72b",
  measurementId: "G-MEEP9VKS26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);