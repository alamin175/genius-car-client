// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyBQDnqiPsyHEHHnHzBTsWkSV7NnV0vUNyQ",
  authDomain:"genius-car-d4daf.firebaseapp.com",
  projectId:"genius-car-d4daf",
  storageBucket:"genius-car-d4daf.appspot.com",
  messagingSenderId:855509111335,
  appId:"1:855509111335:web:bccb44deec5cc4170bb402",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
