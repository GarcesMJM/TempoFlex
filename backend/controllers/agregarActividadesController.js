const admin = require('firebase-admin');
const db = admin.firestore();
const actCollection = db.collection('actividades');


async function agregarActividades(req, res) {
  try {
    const { name, desc, date, initTime, finalTime } = req.body;
    console.log(req.body);

    const newActivity = {
        nombre: name,
        descripcion: desc,
        fecha: date,
        hora_inicio: initTime,
        hora_final: finalTime,
    };

    actCollection.add(newActivity)
    .then((docRef) => {
        console.log('Documento creado con ID:', docRef.id);
    })
    .catch((error) => {
        console.error('Error al crear el documento:', error);
    });
    res.status(200).send({ message: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: false });
  }
}

module.exports = agregarActividades;