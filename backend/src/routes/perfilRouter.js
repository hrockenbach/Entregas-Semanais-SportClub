// const express = require('express');
// const connection = require('mysql2');
// const { getPerfil } = require('../controller/perfilController');

// // const perfilController = require('../controller/perfilController'); // Importa o controlador de perfil

// const router = express.Router();

// // Define a rota para obter informações de perfil

// /**
// * @swagger
// * /perfil/:id:
// *  get:
// *   summary: Manda informações de cadastro para o perfil
// *   responses:
// *    200:
// *     description: Exibe perfil do usuário
// *     content:
// *      application/json:
// *       schema:
// *        type: array
// *        items:
// *         type: object
// */
// router.get('/perfil/:id', getPerfil);

// // Pegando dados do perfil do usuário
// router.get('/:id', (req, res) => {
//     const { id } = req.params;

//     const query = 'SELECT nome_completo, data_nascimento, descricao FROM users WHERE id = usuarios'; 
//     connection.query(query, [id], (err, results) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ success: false, message: 'Erro ao buscar dados do usuário' });
//         }

//         if (results.length === 0) {
//             return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
//         }

//         res.json({ success: true, data: results });
//     });
// });

// module.exports = router;


const express = require('express');
const connection = require('mysql2');
const { getPerfil } = require('../controller/perfilController');

const router = express.Router();

// Define a rota para obter informações de perfil
router.get('/perfil/:id', getPerfil);

// Pegando dados do perfil do usuário
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const query = 'SELECT nome_completo, data_nascimento, descricao FROM usuarios WHERE id = ?'; // Corrigido o nome da tabela e a cláusula WHERE
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Erro ao buscar dados do usuário' });
        }

        if (results.length === 0) {
            return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }

        res.json({ success: true, data: results[0] }); // Ajustado para retornar o primeiro usuário
    });
});

module.exports = router;