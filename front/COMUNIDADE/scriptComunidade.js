let button = document.getElementById("salvar");

button.onclick = async function (e) {
    e.preventDefault();

    let form = document.getElementById('sobreposicao');
    let dadosForm = new FormData(form); // Criação do FormData a partir do formulário

    // Captura manual dos valores (não é necessário se os campos já estão no formulário)
    let nome = document.getElementById("nome_grupo").value;
    let descricao = document.getElementById("descricao").value;

    // Caso queira adicionar campos adicionais ao FormData manualmente:
    dadosForm.append("nome_grupo", nome);

    try {
        const response = await fetch('http://localhost:3006/api/store/comunidade', {
            method: "POST",
            body: dadosForm // Enviando o FormData diretamente
        });

        let content = await response.json();

        console.log(content.errorSQL);

        if (content.success) {
            alert("Sucesso");
        } else {
            alert("Não deu certo");
            console.log(content.sql);
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
    }
}