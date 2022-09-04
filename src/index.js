import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTfC2HzSkWP7ERL6TIkf6MssO4ihuD0vE",
  authDomain: "chating-app-f02d0.firebaseapp.com",
  databaseURL: "https://chating-app-f02d0-default-rtdb.firebaseio.com",
  projectId: "chating-app-f02d0",
  storageBucket: "chating-app-f02d0.appspot.com",
  messagingSenderId: "1055272698447",
  appId: "1:1055272698447:web:56f5b733e627ebc433a03a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

