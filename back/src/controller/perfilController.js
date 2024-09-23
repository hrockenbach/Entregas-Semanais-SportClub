const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Função para buscar informações de perfil do banco de dados
const getPerfil = (req, res) => {
  const userId = req.query.id; 

  if (!userId) {
    return res.status(400).send('ID do usuário é necessário');
  }

  const sql = 'SELECT nome_completo, idade, descricao FROM usuarios WHERE id = ?'; 

  connection.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao buscar dados'); // 500 para erro de servidor
    }
    if (result.length > 0) {
      res.json(result[0]); // Retorna o primeiro registro
    } else {
      res.status(404).send('Usuário não encontrado');
    }
  });
};

module.exports = {
  storePerfil,
  getPerfil
}