import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPNx36E-nQR6_xIvgrw8FK1YoMcr_IIVY",
  authDomain: "cart-b548b.firebaseapp.com",
  projectId: "cart-b548b",
  storageBucket: "cart-b548b.appspot.com",
  messagingSenderId: "884470586264",
  appId: "1:884470586264:web:5288c9f4bf85bb5cc069ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


