import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBh26bHDIJjICA0zQPXCpTVN2rYKbr8fR8",
    authDomain: "wheelers-1179d.firebaseapp.com",
    projectId: "wheelers-1179d",
    storageBucket: "wheelers-1179d.firebasestorage.app",
    messagingSenderId: "538213127481",
    appId: "1:538213127481:web:15639612103d73a28744e8",
    measurementId: "G-C9GGMNRJ8W"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
