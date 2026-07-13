import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBL3eQYq6Jnmtoe8_pvFYqZmnjg4MTN0W4",
  authDomain: "gimeno-design-solutions.firebaseapp.com",
  projectId: "gimeno-design-solutions",
  storageBucket: "gimeno-design-solutions.firebasestorage.app",
  messagingSenderId: "184076088967",
  appId: "1:184076088967:web:9d67f43998e085968d2a22"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);