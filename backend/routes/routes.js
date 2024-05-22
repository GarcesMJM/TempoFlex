const express = require('express');
const router = express.Router();

const registroController = require('../controllers/registroController');
const iniciarsesionController = require('../controllers/iniciarsesionController');

router.post('/register', registroController);
router.post('/iniciarsesion', iniciarsesionController);


module.exports = router;