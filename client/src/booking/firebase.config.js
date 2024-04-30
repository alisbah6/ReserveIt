
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCliDIFa_hh2SnCSvTzmCMhGWbPQT2QYsY",
  authDomain: "otp-project-20a13.firebaseapp.com",
  projectId: "otp-project-20a13",
  storageBucket: "otp-project-20a13.appspot.com",
  messagingSenderId: "646079026998",
  appId: "1:646079026998:web:15adaada3ce68206148597",
  measurementId: "G-5ZS05DFX7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)