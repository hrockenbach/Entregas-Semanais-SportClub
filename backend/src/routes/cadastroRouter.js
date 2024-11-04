const { Router } = require('express');

const router = Router();

const {
  storeTask
} = require('../controller/cadastroController');

/**
  @swagger
* /tasks/register:
*  post:
*   summary: Cadastra um novo usuário
*   responses:
*    200:
*     description: Sucesso!
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/

router.post('/tasks/register', storeTask);

module.exports = router;