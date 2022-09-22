import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos.css';
import App from './App';




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8O53npEC3Ear_Nt8kmkaYcF0nyEWm0iE",
  authDomain: "coder-app-fe071.firebaseapp.com",
  projectId: "coder-app-fe071",
  storageBucket: "coder-app-fe071.appspot.com",
  messagingSenderId: "197717672541",
  appId: "1:197717672541:web:92c32b99fa477641ed03b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


