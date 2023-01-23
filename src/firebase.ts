import { initializeApp } from "firebase/app";

// Helper Function to access .env file values faster
export const envValue = (valueName: string): string => {
  return import.meta.env[valueName];
};

const firebaseConfig = {
  apiKey: envValue("VITE_FIREBASE_API_KEY"),
  authDomain: envValue("blue-store-de646.firebaseapp.com"),
  databaseURL: "https://fir-with-react-374b4.firebaseio.com",
  projectId: "fir-with-react-374b4",
  storageBucket: "fir-with-react-374b4.appspot.com",
  messagingSenderId: "128589536763",
  appId: "1:128589536763:web:93d86b9d73566968cebf5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
