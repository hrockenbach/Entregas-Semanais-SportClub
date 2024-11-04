const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Função para buscar informações de perfil do banco de dados
const getPerfil = (req, res) => {
  const userId = req.params.id; // Pega o ID da URL corretamente
  console.log(userId)
  const sql = 'SELECT * FROM usuarios WHERE id = ?';

  connection.query(sql, [userId], (err, result) => {
    // if (err) {
    //   return res.status(500).send('Erro ao buscar dados');
    // }
    // if (result.length > 0) {
    //   res.json(result[0]); // Retorna o primeiro registro encontrado
    // } else {
    //   res.status(404).send('Usuário não encontrado');
    // }
    console.log(result)
    if (result) {
      res.status(201).json({
        success: true,
        message: "Sucesso com a busca do usuário!!",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Ops, deu problemas com a busca do usuário!!",
        data: err,
      });
    }
  });
};

module.exports = {
  getPerfil,
};