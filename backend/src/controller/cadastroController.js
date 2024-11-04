const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha,
        request.body.nascimento
    );
    
    const query = "INSERT INTO usuarios(nome_completo, email, senha, data_nascimento) VALUES(?,?,?,?)";

    connection.query(query, params, (err, results) => {
        console.log(err, results)
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}