// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM2Q_9GbyaJUeMR31UOUUzMyXBAtKWpI8",
  authDomain: "reserveit-otp.firebaseapp.com",
  projectId: "reserveit-otp",
  storageBucket: "reserveit-otp.appspot.com",
  messagingSenderId: "653582876260",
  appId: "1:653582876260:web:38046858571a89f04e2971",
  measurementId: "G-T9M7KHZ1QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)