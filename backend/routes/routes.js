const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const recuperarContraseñaController = require('../controllers/recuperarContraseñaController');
const obtenerActividadesController = require('../controllers/obtenerActividadesController')

router.post('/register', registroController);
router.post('/iniciarsesion', iniciarsesionController);
router.post('/recuperarcontrasena', recuperarContraseñaController);
router.post('/obteneractividades', obtenerActividadesController);


module.exports = router;