const admin = require('firebase-admin');
const { Timestamp } = require('firebase-admin/firestore');
const db = admin.firestore();
const usersRef = db.collection('actividades');

async function obtenerActividades(req, res) {
  try {
    const { date } = req.body;
      
    let snapshot = null;
    let actividades = [];
    
    snapshot = await usersRef.where('fecha', '==', date).get()

    
    if (snapshot.empty) {
      console.log('No se encontraron actividades para esta fecha');
      return res.status(404).send({message:'No se encontraron actividades para esta fecha'});
      }else{
         actividades = snapshot.docs.map(doc => {
                let actividad = doc.data();
                actividad.id = doc.id;  // Aquí agregas el ID del documento a los datos de la mascota
                return actividad;
              });
              console.log(actividades);
      }
      
      return res.status(200).send(actividades);
  } catch (error) {
    console.log('Error al obtener al obtener actividades:', error);
    return res.status(500).send({message: 'Error al obtenner actividades'});
  }

}
module.exports = obtenerActividades;
