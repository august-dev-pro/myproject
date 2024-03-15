// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4IULqb9RezlIYvo7_NetmgAVTjism41s",
  authDomain: "chat-app-project-fffa7.firebaseapp.com",
  databaseURL: "https://chat-app-project-fffa7-default-rtdb.firebaseio.com",
  projectId: "chat-app-project-fffa7",
  storageBucket: "chat-app-project-fffa7.appspot.com",
  messagingSenderId: "6903424080",
  appId: "1:6903424080:web:579183b0b9ab5a262e9d55",
  measurementId: "G-5B38C7NC32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
