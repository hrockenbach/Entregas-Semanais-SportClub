// Inicializa o mapa com o centro em São Leopoldo
// var map = L.map('map').setView([-29.7544, -51.1496], 13);

// // Adiciona o tile layer do OpenStreetMap
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Adiciona a camada GeoJSON (certifique-se de ter os dados corretos)
// L.geoJSON(saoleopoldoGeoJSON).addTo(map);

// // Define as quadras de vôlei
// var quadras = [
//     { "id": 1, "name": "W7 Arena", "coords": [-29.7586, -51.1610], "quadra": "Normal", "classificacao": "5 Estrelas" },
//     { "id": 2, "name": "SPEED Campina Vôlei e Futsal", "coords": [-29.7605, -51.1482], "quadra": "Normal", "classificacao": "4.8 Estrelas" },
//     { "id": 3, "name": "4Play Beach Sports", "coords": [-29.7642, -51.1458], "quadra": "Praia", "classificacao": "4.7 Estrelas" },
//     { "id": 4, "name": "Orange Complexo Esportivo", "coords": [-29.7677, -51.1434], "quadra": "Normal", "classificacao": "4.3 Estrelas" },
//     { "id": 5, "name": "Quintal Power", "coords": [-29.7712, -51.1410], "quadra": "Normal", "classificacao": "5 Estrelas" },
//     { "id": 6, "name": "Parque do Trabalhador", "coords": [-29.7654, -51.0913], "quadra": "Normal", "classificacao": "4.6 Estrelas" },
//     { "id": 7, "name": "Praça Elis Regina", "coords": [-29.7662, -51.1406], "quadra": "Normal", "classificacao": "4.4 Estrelas" },
//     { "id": 8, "name": "Praça Vinte de Setembro", "coords": [-29.7739, -51.1427], "quadra": "Normal", "classificacao": "4.5 Estrelas" },
//     { "id": 9, "name": "Parque Imperatriz", "coords": [-29.7653, -51.1356], "quadra": "Normal", "classificacao": "4.7 Estrelas" },
//     { "id": 10, "name": "Praça Mansueto Bernardi", "coords": [-29.7783, -51.1433], "quadra": "Normal", "classificacao": "4.2 Estrelas" },
//     { "id": 11, "name": "Praça Amadeo Rossi", "coords": [-29.7719, -51.1367], "quadra": "Normal", "classificacao": "4.3 Estrelas" },
//     { "id": 12, "name": "Arena Movimentum", "coords": [-29.7700, -51.1500], "quadra": "Normal", "classificacao": "4.9 Estrelas" },
//     { "id": 13, "name": "Complexo Desportivo UNISINOS", "coords": [-29.7963, -51.1505], "quadra": "Normal", "classificacao": "5 Estrelas" },
//     { "id": 14, "name": "Arena Ball Scharlau", "coords": [-29.7583, -51.1775], "quadra": "Normal", "classificacao": "4.7 Estrelas" },
//     { "id": 15, "name": "Ginásio Campina", "coords": [-29.7605, -51.1475], "quadra": "Normal", "classificacao": "4.5 Estrelas" }
// ];


// Adiciona marcadores com popups para as quadras
quadras.forEach(function(quadra) {
    var marker = L.marker(quadra.coords).addTo(map);
    var popupContent = `<b>${quadra.name}</b><br>Quadra: ${quadra.quadra}<br>Classificação: ${quadra.classificacao} <br> <a href='#quadra${quadra.id}'>Saiba Mais</a>`;
    marker.bindPopup(popupContent);
});

// Função para mover o slide no carousel
let index = 0;

// function moveSlide(step) {
//     const slides = document.querySelectorAll('.carousel-images img');
//     const totalSlides = slides.length;
//     const carouselImages = document.querySelector('.carousel-images');
//     const slideWidth = slides[0].offsetWidth; // Usa offsetWidth para a largura correta

//     // Atualiza o índice
//     index = (index + step + totalSlides) % totalSlides;

//     // Move as imagens no carousel
//     carouselImages.style.transform = `translateX(-${index * slideWidth}px)`;
// }