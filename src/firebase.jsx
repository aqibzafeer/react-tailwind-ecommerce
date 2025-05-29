import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBC7v5soKhLAXYZ5gD15Seroqx0xe-Qm3U",
  authDomain: "darwazypy.firebaseapp.com",
  projectId: "darwazypy",
  storageBucket: "darwazypy.firebasestorage.app",
  messagingSenderId: "695186343512",
  appId: "1:695186343512:web:d7b02eb9734045e2b2ac2d",
  measurementId: "G-99BWQDQ001",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
