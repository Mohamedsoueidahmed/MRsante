// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt9h6SKaJ9uOsjQ1BdZ9oa4lFz9ngIAmo",
  authDomain: "wergui-project.firebaseapp.com",
  projectId: "wergui-project",
  storageBucket: "wergui-project.firebasestorage.app",
  messagingSenderId: "270688693017",
  appId: "1:270688693017:web:f85bdeef659e2fee6db388",
  measurementId: "G-QBFDE0FY4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth(app);