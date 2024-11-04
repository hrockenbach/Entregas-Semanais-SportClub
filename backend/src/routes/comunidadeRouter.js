const { Router } = require('express');
const router = Router();

const { storeComunidade, getComunidade } = require('../controller/comunidadeController');

router.post('/store/comunidade', storeComunidade);
router.get('/get/postagens', getComunidade);

module.exports = router;

/**
  @swagger
* /store/comunidade:
*  post:
*   summary:  posta grupos na comunidade
*   responses:
*    200:
*     description: exibe grupo na página de comunidade
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/

/**
  @swagger
* /get/postagens:
*  post:
*   summary:  Pega informações para cadastrar grupos
*   responses:
*    200:
*     description: Exibe grupos com as informações escolhidas
*     content:
*      application/json:
*       schema:
*        type: array
*        items:
*         type: object
*/