import { initializeApp } from "firebase/app";

// Helper Function to access .env file values faster
export const envValue = (valueName: string): string => {
  return import.meta.env[valueName];
};
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: envValue("VITE_FIREBASE_API_KEY"),
  authDomain: envValue("VITE_FIREBASE_AUTH_DOMAIN"),
  databaseURL: envValue("VITE_FIREBASE_DATABASEURL"),
  projectId: envValue("VITE_FIREBASE_PROJECT_ID"),
  storageBucket: envValue("VITE_FIREBASE_STORAGE_BUCKET"),
  messagingSenderId: envValue("VITE_FIREBASEMESSAGING_STANDER_ID"),
  appId: envValue("VITE_FIREBASE_APP_ID"),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
