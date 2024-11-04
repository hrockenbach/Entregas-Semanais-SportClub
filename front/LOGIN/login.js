let button = document.getElementById("botao");

button.onclick = async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let data = {email, senha}

    const response = await fetch('http://localhost:3006/api/login', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data)
    });

    let content = await response.json();

    console.log(content);

    if(content.success) {
        localStorage.setItem('nome', content.data[0].nome);
        localStorage.setItem('id_usuario', content.data[0].id);

        window.location.href = '../index.html';
    }  else {
        alert(content.message);
    }
}

