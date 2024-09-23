const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const fileupload = require('express-fileupload');

// Importa os controladores do cadastro, comunidade e perfil
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');
const comunidadeRouter = require('./routes/comunidadeRouter');
const perfilController = require('./routes/perfilRouter'); 

const app = express();

app.set('port', process.env.PORT || 3008);
app.use(express.json());
app.use(cors());
app.use(fileupload());

app.use('/uploads', express.static(path.join(__dirname, "uploads")));

// Rotas do cadastro, comunidade e perfil
app.use('/api', taskRouter);
app.use('/api', comunidadeRouter);
app.get('/perfil', perfilRouter);

module.exports = app;