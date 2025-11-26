// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// ⚠️ SUBSTITUA PELAS SUAS CHAVES DO FIREBASE ⚠️
   const firebaseConfig = {
        apiKey: "AIzaSyAnGyAYBthXQs5rEylnLXCxOVQKKN1FP34",
        authDomain: "grafica-619fd.firebaseapp.com",
        databaseURL: "https://grafica-619fd-default-rtdb.firebaseio.com", 
        projectId: "grafica-619fd",
        storageBucket: "grafica-619fd.firebasestorage.app",
        messagingSenderId: "1022124441596",
        appId: "1:1022124441596:web:d6f25056f38a6babc67c79",
        measurementId: "G-SQ4QNTFXCM"
    }; 

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância de autenticação
export const auth = getAuth(app);