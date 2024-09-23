const connection = require('../config/db');
const dotenv = require('dotenv').config();
const fs = require('fs');
const path = require('path');
const uploadPath = path.join(__dirname, '..', 'uploads');

// Criação do diretório se não existir
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

async function storeComunidade(request, response) {
    if (!request.files || !request.files.imagem) {
        return response.status(400).json({
            success: false,
            message: "Nenhuma imagem foi enviada"
        });
    }

    const imagem = request.files.imagem;
    const imagemNome = Date.now() + path.extname(imagem.name);

    imagem.mv(path.join(uploadPath, imagemNome), (erro) => {
        if (erro) {
            return response.status(500).json({
                success: false,
                message: "Erro ao mover a imagem",
                error: erro
            });
        }

        const params = [
            request.body.nome_grupo,
            imagemNome,
            request.body.descricao
        ];

        console.log("params", params)

        const query = "INSERT INTO postagens(nome_grupo, imagem, descricao) VALUES (?, ?, ?)";

        connection.query(query, params, (err, results) => {
            if (err) {
                return response.status(500).json({
                    success: false,
                    message: "Erro ao inserir os dados",
                    errorSQL: err
                });
            }

            response.status(200).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        });
    });
}

async function getComunidade(request, response) {
    const query = "SELECT * FROM postagens";

    connection.query(query, (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: "Erro ao buscar os dados",
                sql: err
            });
        }

        response.status(200).json({
            success: true,
            message: "Dados recuperados com sucesso",
            data: results
        });
    });
}

module.exports = {
    storeComunidade,
    getComunidade
};