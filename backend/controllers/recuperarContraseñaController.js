// Import the functions you need from the SDKs you need
const admin = require('firebase-admin');
const { auth } = require('../firebase/config.js')
const firebaseAuth = require('firebase/auth');

async function Login(req, res) {
  try {
    const { email} = req.body;
  
    // Inicia sesión con correo electrónico y contraseña
    const envio = await sendPasswordResetEmail(auth, email);

    if (!envio) {
      return res.status(201).send({ message: true });
    } else {

      return res.status(500).send({ message: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: false });
  }
}

module.exports = Login;
