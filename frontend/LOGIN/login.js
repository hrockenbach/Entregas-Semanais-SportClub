// // let button = document.getElementById("botao");

// // button.onclick = async function (event) {
// //     event.preventDefault();
// //     let email = document.getElementById("email").value;
// //     let senha = document.getElementById("senha").value;
// //     let data = {email, senha}

// //     const response = await fetch('http://localhost:3006/api/login', {
// //         method: "POST",
// //         headers: {"Content-type": "application/json;charset=UTF-8"},
// //         body: JSON.stringify(data)
// //     });

// //     let content = await response.json();

// //     console.log(content);

// //     if(content.success) {
// //         localStorage.setItem('nome', content.data[0].nome);
// //         localStorage.setItem('id_usuario', content.data[0].id);

// //         window.location.href = '../index.html';
// //     }  else {
// //         alert(content.message);
// //     }
// // }



// // let button = document.getElementById("entrar");

// // button.onclick = async function (event) {
// //     event.preventDefault();
// //     let email = document.getElementById("email").value;
// //     let senha = document.getElementById("senha").value;
// //     let data = {email, senha}

// //     const response = await fetch('http://localhost:3006/api/login', {
// //         method: "POST",
// //         headers: {"Content-type": "application/json;charset=UTF-8"},
// //         body: JSON.stringify(data)
// //     });

// //     let content = await response.json();

// //     console.log(content);

// //     if(content.success) {
// //         window.location.href = 'index.html';
// //     } else {
// //         alert(content.message);
// //     }
// // }




// let button = document.getElementById("botaoEnviar");

// button.onclick = async function (event) {
//     event.preventDefault();

//     // Capturar os valores do email e senha inseridos pelo usuário
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;

//     // Verificar se os campos estão preenchidos
//     if (!email || !senha) {
//         alert("Por favor, preencha todos os campos.");
//         return;
//     }

//     let data = { email, senha };

//     try {
//         // Enviar requisição para o servidor para verificar o cadastro
//         const response = await fetch('http://localhost:3006/api/verificarCadastro', {
//             method: "POST",
//             headers: { "Content-type": "application/json;charset=UTF-8" },
//             body: JSON.stringify(data)
//         });

//         const content = await response.json();

//         // Processar a resposta do servidor
//         if (content.success) {
//             // Se o cadastro for encontrado, permitir entrada
//             alert("Login bem-sucedido! Redirecionando...");
//             window.location.href = 'index.html';
//         } else {
//             // Se não houver cadastro, exibir mensagem
//             alert(content.message || "Usuário não encontrado. Verifique suas credenciais ou cadastre-se.");
//         }

//     } catch (error) {
//         // Tratar erros de rede ou do servidor
//         console.error("Erro na requisição:", error);
//         alert("Houve um problema ao tentar realizar o login. Tente novamente mais tarde.");
//     }
// };




document.addEventListener('DOMContentLoaded', function () {
    // Captura o botão de envio
    const botaoEnviar = document.getElementById('botaoEnviar');

    // Verifica se o botão foi encontrado
    if (botaoEnviar) {
        // Evento para quando o botão for clicado
        botaoEnviar.onclick = async function (event) {
            // Impede o comportamento padrão do botão (se houver)
            event.preventDefault();  

            // Coleta os valores dos campos de entrada
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            // Cria o objeto userData com email e senha
            const userData = {
                email: email,
                senha: senha
            };

            try {
                // Envia o objeto userData como JSON via POST
                const response = await fetch('http://localhost:3006/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)  // Envia o objeto no corpo da requisição
                });

                const data = await response.json();

                // Se a resposta for OK, redireciona o usuário
                if (response.ok) {
                    alert(data.message);
                    window.location.href = 'perfil.js';
                } else {
                    // Caso contrário, mostra a mensagem de erro
                    alert(data.message || 'Erro ao realizar login');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                alert('Erro ao conectar ao servidor. Tente novamente mais tarde.');
            }
        };
    } else {
        console.error('Botão de envio não encontrado!');
    }
});