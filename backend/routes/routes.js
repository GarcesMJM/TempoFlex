const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');
const recuperarContraseñaController = require('../controllers/recuperarContraseñaController');

router.post('/register', registroController);
router.post('/iniciarsesion', iniciarsesionController);
router.post('/recuperarcontrasena', recuperarContraseñaController);

module.exports = router;