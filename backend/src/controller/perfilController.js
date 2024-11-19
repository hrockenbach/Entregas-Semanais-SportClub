// const connection = require('../config/db');
// const dotenv = require('dotenv').config();

// // Função para buscar informações de perfil do banco de dados
// const getPerfil = (req, res) => {
//   const userId = req.params.id; // Pega o ID da URL corretamente
//   console.log(userId)
//   const sql = 'SELECT * FROM usuarios WHERE id = ?';

//   connection.query(sql, [userId], (err, result) => {
//     console.log(result)
//     if (result) {
//       res.status(201).json({
//         success: true,
//         message: "Sucesso com a busca do usuário!!",
//         data: result,
//       });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "Ops, deu problemas com a busca do usuário!!",
//         data: err,
//       });
//     }
//   });
// };

// module.exports = {
//   getPerfil,
// };



const connection = require('../config/db');
const dotenv = require('dotenv').config();

// Função para buscar informações de perfil do banco de dados
const getPerfil = (req, res) => {
  const userId = req.params.id; // Pega o ID da URL corretamente
  console.log(userId);

  const sql = 'SELECT * FROM usuarios WHERE id = ?';

  connection.query(sql, [userId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Erro ao buscar dados do usuário.',
        error: err,
      });
    }

    if (result.length > 0) {
      res.status(200).json({
        success: true,
        message: "Usuário encontrado com sucesso!",
        data: result[0], // Retorna o primeiro registro encontrado
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Usuário não encontrado.",
      });
    }
  });
};

// Função para atualizar os dados do perfil
const updatePerfil = (req, res) => {
  const { id } = req.params;  // Obtém o ID do parâmetro da URL
  const { nome_completo, nome_usuario, email, senha, idade, descricao, imagemPerfil } = req.body;

  const query = `
    UPDATE usuarios 
    SET 
        nome_completo = ?, 
        nome_usuario = ?, 
        email = ?, 
        senha = ?, 
        idade = ?, 
        descricao = ?, 
        imagemPerfil = ? 
    WHERE id = ?
  `;

  connection.query(
    query,
    [nome_completo, nome_usuario, email, senha, idade, descricao, imagemPerfil, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Erro ao atualizar os dados do usuário.',
          error: err,
        });
      }

      if (result.affectedRows > 0) {
        res.status(200).json({
          success: true,
          message: 'Usuário atualizado com sucesso!',
        });
      } else {
        res.status(400).json({
          success: false,
          message: 'Nenhuma alteração detectada ou usuário não encontrado.',
        });
      }
    }
  );
};

module.exports = {
  getPerfil,
  updatePerfil,
};