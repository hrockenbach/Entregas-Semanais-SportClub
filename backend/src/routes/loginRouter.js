const express = require('express');
const mysql = require('mysql2'); 
const router = express.Router();

// conexão com o banco 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'SportClub'
});

// Verifica conexão com o banco
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});

// Rota de login
router.post('./login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ success: false, message: 'Insira seu email e sua senha' });
    }

    // Verifica se o usuário existe no banco de dados
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Erro ao executar a query:', err);
            return res.status(500).json({ success: false, message: 'Erro no servidor' });
        }

        if (results.length > 0) {
            const user = results[0];
            if (user.senha === senha) {
                return res.json({ success: true, message: 'Login realizado com sucesso' });
            } else {
                return res.status(401).json({ success: false, message: 'Senha incorreta' });
            }
        } else {
            return res.status(404).json({ success: false, message: 'Este usuário não existe' });
        }
    });
});

module.exports = router;