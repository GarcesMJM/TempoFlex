const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const recuperarContraseñaController = require('../controllers/recuperarContraseñaController');
const obtenerActividadesController = require('../controllers/obtenerActividadesController')
const agregarActividadesController = require('../controllers/agregarActividadesController');

router.post('/register', registroController);
router.post('/iniciarsesion', iniciarsesionController);
router.post('/recuperarcontrasena', recuperarContraseñaController);
router.post('/obteneractividades', obtenerActividadesController);
router.post('/agregarActividades', agregarActividadesController);

module.exports = router;