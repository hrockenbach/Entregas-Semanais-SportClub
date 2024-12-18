const app = require('./app');
const port = app.get('port');
const swaggerUi = require ("swagger-ui-express")
const swaggerJSDoc = require ("swagger-jsdoc")
const connection = require('./config/db');

// Docuemntação dos métodos
const swaggerOptions = {
    swaggerDefinition : {
        openapi:"3.0.0",
        info: {
            title: "API de Tarefas", 
            version: "1.0.0",
            description: "API CRUD para gerenciar tarefas",
        },
        servers: [{ url: "http://localhost:3003" }],
    },
    apis: [`${__dirname}/routes/*.js`],
};

// app.listen(port, () => console.log(`Rodando na porta ${port}`));

// Importando rotas
const cadastroRouter = require('./routes/cadastroRouter');
const loginRouter = require('./routes/loginRouter');
const swaggerDocs = swaggerJSDoc(swaggerOptions);
const perfilRouter = require('./routes/perfilRouter');
const perfilController = require('./controller/perfilController');

// Usando rotas 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/login', loginRouter);
app.use('/api/cadastro', cadastroRouter);
app.use('/api/perfil', perfilRouter);

// Rota de atualização de perfil (usando o controller)
app.put('/api/perfil/:id', perfilController.updatePerfil);

// Puxando parâmetros
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { nome_completo, nome_usuario, email, senha, idade, descricao, imagemPerfil } = req.body;
    const query = 'UPDATE products SET nome_completo = ?, nome_usuario = ?, email = ?, senha = ?, idade = ?, descricao = ?, imagemPerfil = ? WHERE id = ?';
    connection.query(query, [nome_completo, nome_usuario, idade, email, senha, descricao, imagemPerfil], (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Erro ao atualizar produto.' });
      }
      res.json({ success: true, message: 'Produto atualizado com sucesso!' });
    });
  });

// Servidor
app.listen(port, () => console.log(`Rodando na porta ${port}`));