# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrb1xsjKe_09FbfH07P_cahImyr6AAS8k",
  authDomain: "fs20-21.firebaseapp.com",
  projectId: "fs20-21",
  storageBucket: "fs20-21.appspot.com",
  messagingSenderId: "1055770247859",
  appId: "1:1055770247859:web:fb82b9d0868e6ff39ce6c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);