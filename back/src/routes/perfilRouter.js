const express = require('express');

const { getPerfil } = require('../controller/perfilController');

// const perfilController = require('../controller/perfilController'); // Importa o controlador de perfil

const router = express.Router();

// Define a rota para obter informações de perfil

/**
* @swagger
* /perfil/:id:
*  get:
*   summary: Manda informações de cadastro para o perfil
*   responses:
*    200:
*     description: Exibe perfil do usuário
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/
router.get('/perfil/:id', getPerfil);

module.exports = router;