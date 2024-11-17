// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8HZAWIv0Ga0gDIGXJgSue1Fa66mnuQ7c",
  authDomain: "dragon-news-e0dca.firebaseapp.com",
  projectId: "dragon-news-e0dca",
  storageBucket: "dragon-news-e0dca.firebasestorage.app",
  messagingSenderId: "354977902183",
  appId: "1:354977902183:web:208fbf1d53d8e50d21aec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Initialize Firebase Authentication and get a reference to the service
