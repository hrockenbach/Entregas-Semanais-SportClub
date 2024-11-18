let usuario = JSON.parse(localStorage.getItem("usuarioLogado"))

let button = document.getElementById("botao");

button.onclick = async function (event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let nascimento = document.getElementById("data").value;

    let data = { nome, email, senha, nascimento }

    console.log(data)

    const response = await fetch('http://localhost:3006/api/tasks/register', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data)
    });

    let content = await response.json();
    console.log(content);

    if (content.success) {
        alert("Sucesso")

        window.location.href = '../LOGIN/login.html';
    } else {
        alert('Não');
    }
}