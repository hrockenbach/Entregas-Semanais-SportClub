const app = require('./app');
const port = app.get('port');
const swaggerUi = require ("swagger-ui-express")
const swaggerJSDoc = require ("swagger-jsdoc")

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

// Usando rotas 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/login', loginRouter);
app.use('/api/cadastro', cadastroRouter);

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

//   app.post('/api/verificarCadastro', (req, res) => {
//     const { email, senha } = req.body;

//     // Se email e senha foram cadastrados
//     if (!email || !senha) {
//         return res.status(400).json({ success: false, message: 'Email e senha são obrigatórios.' });
//     }

//     // Verifica o cadastro por meio do banco
//     const query = 'SELECT * FROM usuarios WHERE email = ?';
//     connection.query(query, [email], async (err, results) => {
//         if (err) {
//             console.error('Erro ao consultar o banco de dados:', err);
//             return res.status(500).json({ success: false, message: 'Erro interno do servidor.' });
//         }

//         // Se o usuário foi encontrado
//         if (results.length === 0) {
//             return res.status(404).json({ success: false, message: 'Usuário não encontrado.' });
//         }

//         // Validar senha 
//         const user = results[0];
//         const senhaValida = senha === user.senha; 

//         if (!senhaValida) {
//             return res.status(401).json({ success: false, message: 'Senha incorreta.' });
//         }

//         // Sucesso
//         res.json({ success: true, message: 'Login bem-sucedido!' });
//     });
// });


app.listen(port, () => console.log(`Rodando na porta ${port}`));