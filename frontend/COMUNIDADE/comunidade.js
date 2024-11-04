// Função p/ mostrar o card e a sobreposicao
function showCard() {
    document.getElementById("sobreposicao").style.display = "block";
    document.getElementById("card").style.display = "block";
}

// Função p/ esconder o card e a sobreposicao
function hideCard() {
    document.getElementById("sobreposicao").style.display = "none";
    document.getElementById("card").style.display = "none";
}

// Funções dos botões
document.querySelector(".adicionar").onclick = showCard;
document.getElementById("fechar").onclick = hideCard;