// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1MyHIp1OQzDho8kfpWyeFiiSVlA5wSEM",
  authDomain: "monkey-community.firebaseapp.com",
  databaseURL: "https://monkey-community-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monkey-community",
  storageBucket: "monkey-community.appspot.com",
  messagingSenderId: "865978317277",
  appId: "1:865978317277:web:0e9023428e76c810775e34",
  measurementId: "G-0RY653V3WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);