// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBERHYEYRIEGRnwo1IWZmIBjnvBjqUDDGs",
  authDomain: "sports-arena-client.firebaseapp.com",
  projectId: "sports-arena-client",
  storageBucket: "sports-arena-client.appspot.com",
  messagingSenderId: "765498624947",
  appId: "1:765498624947:web:26529fbfbff1f5d0fc59c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;