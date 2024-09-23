const { Router } = require('express');
const router = Router();

const { storeComunidade, getComunidade } = require('../controller/comunidadeController');

router.post('/store/comunidade', storeComunidade);
router.get('/get/postagens', getComunidade);

module.exports = router;