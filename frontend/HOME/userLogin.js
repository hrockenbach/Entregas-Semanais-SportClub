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