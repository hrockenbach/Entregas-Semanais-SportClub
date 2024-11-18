async function editProduct(id) {
    const nome_usuario = prompt("Novo nome do produto:");
    const nome_completo = prompt("Nova quantidade do produto:");
    const email = prompt("Novo preço do produto:");
    const senha = prompt("Novo preço do produto:");
    const idade = prompt("Novo preço do produto:");
    const descrisao = prompt("Novo preço do produto:");
    const imagemPerfil = prompt("Novo preço do produto:");
  
    await fetch(`http://localhost:3030/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_completo, nome_usuario, idade, email, senha, descrisao,imagemPerfil })
    });
    loadProducts();
  }

let id_usuario = localStorage.getItem('id_usuario')

// let button = document.getElementById("botao");

button.onclick = async function (event) {
    event.preventDefault();
    let nome_usuario = document.getElementById("nome_usuario").value;
    let nome_completo = document.getElementById("nome_completo").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let idade = document.getElementById("idade").value;
    let descrisao = document.getElementById("descrisao").value;
    let imagemPerfil = document.getElementById("imagemPerfil");
    let data = {nome_completo, nome_usuario, email, senha, idade, descrisao, imagemPerfil}

    let content = await response.json();

    console.log(content);

    if(content.success) {
        localStorage.setItem('nome_completo', content.data[0].nome_completo);
        localStorage.setItem('nome_usuario', content.data[0].nome_usuario);
        localStorage.setItem('idade', content.data[0].idade);
        localStorage.setItem('email', content.data[0].email);
        localStorage.setItem('senha', content.data[0].senha);
        localStorage.setItem('descrisao', content.data[0].descricao);
        localStorage.setItem('imagemPerfil', content.data[0].imagemPerfil);

        window.location.href = '../alteracao.html';
    }  else {
        alert(content.message);
    }
}

    const result = await response.json();

    if (result.success) {
      const perfilContainer = document.getElementById('perfilContainer');
      perfilContainer.innerHTML = '';

      const perfilSection = document.createElement('section');
      perfilSection.className = 'infos_perfil';

      const caixa = document.createElement('div');
      caixa.className = 'caixa';

      const nomeUsuario = document.createElement('p');
      nomeUsuario.textContent = nome_completo;

      const imgPerfil = document.createElement('img');
      imgPerfil.src = imagemPerfil ? URL.createObjectURL(imagemPerfil) : localStorage.getItem('imagemPerfil');
      imgPerfil.id = 'perfil';

      const botaoEditar = document.createElement('button');
      botaoEditar.className = 'edit';
      botaoEditar.type = 'button';

      const imgEditar = document.createElement('img');
      imgEditar.src = '../PERFIL/perfil.img/edit.png';
      botaoEditar.appendChild(imgEditar);

      caixa.appendChild(nomeUsuario);
      caixa.appendChild(imgPerfil);
      caixa.appendChild(botaoEditar);

      const visualizacao = document.createElement('div');
      visualizacao.className = 'visualizacao';

      const nomeCompleto = document.createElement('p');
      nomeCompleto.textContent = `Nome Completo: ${nome_completo}`;

      const idadeElem = document.createElement('p');
      idadeElem.textContent = `Idade: ${idade}`;

      const descricao = document.createElement('p');
      descricao.textContent = `Descrição: ${descrisao}`;

      visualizacao.appendChild(nomeCompleto);
      visualizacao.appendChild(idadeElem);
      visualizacao.appendChild(descricao);

      perfilSection.appendChild(caixa);
      perfilSection.appendChild(visualizacao);

      perfilContainer.appendChild(perfilSection);
    } else {
      console.log('Erro ao carregar o perfil.');
    }