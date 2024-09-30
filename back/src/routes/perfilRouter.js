const express = require('express');

const { getPerfil } = require('../controller/perfilController');

// const perfilController = require('../controller/perfilController'); // Importa o controlador de perfil

const router = express.Router();

// Define a rota para obter informações de perfil
router.get('/perfil/:id', getPerfil);

module.exports = router;