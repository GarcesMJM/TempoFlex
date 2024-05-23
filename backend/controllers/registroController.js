const admin = require('firebase-admin');
const db = admin.firestore();
const usersRef = db.collection('usuarios');


async function registro(req, res) {
  try {
    const { email, password, username, name, lastname } = req.body;

    const usernameExists = await usersRef.where('usuario', '==', username).get();

    if (!usernameExists.empty) {
      return res.status(400).send({ message: 'El nombre de usuario ya está en uso' });
    }

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: username,
    });

    await usersRef.doc(userRecord.uid).set({
      email,
      usuario: username,
      nombres: name, 
      apellidos: lastname,
      foto_perfil: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    });


    res.status(201).send({ message: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: false });
  }
}

module.exports = registro;
