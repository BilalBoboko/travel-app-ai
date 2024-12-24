// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const googleGeminiApiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
print(googleGeminiApiKey)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwg4CY1u3Vyj6rHLg6YUM8AIEDQS6pefk",
    authDomain: "ai-trawel-app.firebaseapp.com",
    projectId: "ai-trawel-app",
    storageBucket: "ai-trawel-app.firebasestorage.app",
    messagingSenderId: "369593502164",
    appId: "1:369593502164:web:afaa9fc34f8ad122336e41",
    measurementId: "G-VK6L7X45ES"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);