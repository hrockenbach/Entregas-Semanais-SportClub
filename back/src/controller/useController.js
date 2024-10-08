require('../config/db');
const dotenv = require('dotenv').config();
 
async function login(request, response) {
    const email = Array (
        request.body.email
    )
    const query = "SELECT * FROM usuarios where email = ? limit 1";
 
    connection.query(query, email, (err, results) => {
        console.log(err, results)
        if(results) {
 
            if(results[0].senha == request.body.senha) {
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
                    message: "Senha inválida",
                    data: err
                })
 
            }
               
        } else {
 
            response
                .status(400)
                .json({
                    success: false,
                    message: "Deu Ruim!",
                    data: err
                })
        }
    })
}
 
module.exports = {
    login
}