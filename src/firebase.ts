import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase de la app web
const firebaseConfig = {
  apiKey: "AIzaSyBmkjf2JP-45ZwDfgugPZRc77q4uX1E0uk",
  authDomain: "pruebawebpage-174f5.firebaseapp.com",
  projectId: "pruebawebpage-174f5",
  storageBucket: "pruebawebpage-174f5.firebasestorage.app",
  messagingSenderId: "849215480692",
  appId: "1:849215480692:web:9ca50671cb459c44c10221",
  measurementId: "G-HHTH1WWXSM"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);

// Inicializar Analytics solo si está en entorno navegador
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
