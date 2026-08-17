import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBh26bHDIJjICA0zQPXCpTVN2rYKbr8fR8",
  authDomain: "wheelers-1179d.firebaseapp.com",
  projectId: "wheelers-1179d",
  storageBucket: "wheelers-1179d.firebasestorage.app",
  messagingSenderId: "538213127481",
  appId: "1:538213127481:web:15639612103d73a28744e8",
  measurementId: "G-C9GGMNRJ8W"
};

// Initialize Firebase App
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics conditionally for browser environment
export const initAnalytics = async () => {
  if (typeof window !== 'undefined' && await isSupported()) {
    return getAnalytics(app);
  }
  return null;
};
