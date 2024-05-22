const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage"); //Módulo de Storage para guardar imágenes
const { getFirestore } = require("firebase/firestore"); // Módulo de Firestore para la base de datos
const firebaseAuth = require('firebase/auth'); // Módulo de autenticación de firebase 

//Se importa la configuración de firebase
const firebaseConfig = {
  apiKey: "AIzaSyBY21T9pM1fBuSCJV1KQ1D0fdunZlZbIkg",
  authDomain: "tempoflex.firebaseapp.com",
  projectId: "tempoflex",
  storageBucket: "tempoflex.appspot.com",
  messagingSenderId: "675835778551",
  appId: "1:675835778551:web:65563a54b2c410416c4af2",
  measurementId: "G-QJC230Y4P9"
};


const app = initializeApp(firebaseConfig); // Se inicializa la base de datos
const auth = firebaseAuth.getAuth(app); // Se inicia el módulo de autenticación
const storage = getStorage(app); // Se inicia el módulo de Storage
const db = getFirestore(app); // Se inicia el módulo de Firestore

module.exports = { auth, storage, db };