document.addEventListener("DOMContentLoaded", async () => {
    try {
        // const id_usuario = localStorage.getItem("id_usuario");

// `http://localhost:3006/api/perfil/${id_usuario}`

        const response = await fetch(`http://localhost:3006/api/perfil/${id_usuario}`,
            {
                method: "GET",
                headers: { "Content-type": "application/json;charset=UTF-8" }
            }
        );

        const result = await response.json();
        console.log(result);

        if (result) {  
            document.getElementById("nome").innerText = result.data[0].nome_completo;
            document.getElementById("idade").innerText = result.data[0].data_nascimento;

            // const perfilContainer = document.getElementById('perfilContainer'); // container no HTML para o perfil

            // // Criação da estrutura de perfil
            // const perfilSection = document.createElement('section');
            // perfilSection.className = 'infos_perfil';

            // // Div para o nome de usuário, imagem de perfil e botão de edição
            // const caixa = document.createElement('div');
            // caixa.className = 'caixa';

            // const nomeUsuario = document.createElement('p');
            // nomeUsuario.textContent = result.data[0].nome_completo; // Nome completo como 'nomeUsuario'

            // const imgPerfil = document.createElement('img');
            // imgPerfil.src = '../PERFIL/perfil.img/icon perfil.png'; // Adapte para o caminho correto da imagem de perfil
            // imgPerfil.id = 'perfil';

            // const botaoEditar = document.createElement('button');
            // botaoEditar.className = 'edit';
            // botaoEditar.type = 'submit';

            // const imgEditar = document.createElement('img');
            // imgEditar.src = '../PERFIL/perfil.img/edit.png';
            // botaoEditar.appendChild(imgEditar);

            // caixa.appendChild(nomeUsuario);
            // caixa.appendChild(imgPerfil);
            // caixa.appendChild(botaoEditar);

            // // Div para as informações do perfil (Nome Completo, Idade, Descrição)
            // const visualizacao = document.createElement('div');
            // visualizacao.className = 'visualizacao';

            // const nomeCompleto = document.createElement('p');
            // nomeCompleto.textContent = `Nome Completo: ${result.nome_completo}`;

            // const idade = document.createElement('p');
            // idade.textContent = `Idade: ${result.idade}`;

            // const descricao = document.createElement('p');
            // descricao.textContent = `Descrição: ${result.descricao}`;

            // visualizacao.appendChild(nomeCompleto);
            // visualizacao.appendChild(idade);
            // visualizacao.appendChild(descricao);

            // // Adiciona os elementos à seção principal do perfil
            // perfilSection.appendChild(caixa);
            // perfilSection.appendChild(visualizacao);

            // // Insere o perfil na página (supondo que haja um div com id 'perfilContainer' no HTML)
            // perfilContainer.appendChild(perfilSection);
        } else {
            console.log('Erro ao carregar o perfil.');
        }
    } catch (error) {
        console.error('Erro ao buscar o perfil:', error);
    }
});