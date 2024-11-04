const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const fileupload = require('express-fileupload');
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Importa os controladores do cadastro, comunidade e perfil
const cors = require('cors');
const cadastroRouter = require('./routes/cadastroRouter');
const comunidadeRouter = require('./routes/comunidadeRouter');
const perfilRouter = require('./routes/perfilRouter'); 

const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "API de Tarefas",
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{url: "http://localhost:3003"}]
    },
    apis: [`${__dirname}/routes/*.js`], // Caminho para as rotas
};

const app = express();

app.set('port', process.env.PORT || 3008);

app.use(express.json());
app.use(cors());
app.use(fileupload());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

// Rotas do cadastro, comunidade e perfil
app.use('/api', cadastroRouter);
app.use('/api', comunidadeRouter);
app.use('/api', perfilRouter);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;