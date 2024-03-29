import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//adding firebase to the cart

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbZLsN9SciOE0XLkYjygv1qZ92f9QMso",
  authDomain: "cart-1e014.firebaseapp.com",
  projectId: "cart-1e014",
  storageBucket: "cart-1e014.appspot.com",
  messagingSenderId: "1019698900491",
  appId: "1:1019698900491:web:c4b1c29c910139b33a210e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default app;