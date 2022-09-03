import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcfCjnJafCERh7ezwIV6SmPI0kouYAI1Y",
  authDomain: "chat-app-4ef68.firebaseapp.com",
  databaseURL: "https://chat-app-4ef68-default-rtdb.firebaseio.com",
  projectId: "chat-app-4ef68",
  storageBucket: "chat-app-4ef68.appspot.com",
  messagingSenderId: "402561867056",
  appId: "1:402561867056:web:7ac9883ab0a7641bf83cf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

