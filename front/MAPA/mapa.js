// var saoleopoldoGeoJSON = {
//     "type": "FeatureCollection",
//     "features": [
//         // Adicione aqui as features do seu arquivo GeoJSON de São Leopoldo
//     ]
// };

// var map = L.map('map').setView([-29.7544, -51.1496], 13); // Coordenadas aproximadas de São Leopoldo

//         // Adiciona o tile layer do OpenStreetMap
//         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // Adiciona a camada GeoJSON de São Leopoldo
//         L.geoJSON(saoleopoldoGeoJSON).addTo(map);

//         // Definindo algumas quadras de vôlei (exemplo)
//         var quadras = [
//             { "name": "W7 Arena", "coords": [-29.7580, -51.1535], "quadra": "Normal", "classificacao": "5 Estrelas" },
//             { "name": "SPEED Campina Vôlei e Futsal", "coords": [-29.7605, -51.1482], "quadra": "normal", "classificacao": "4.8 Estrelas" },
//             { "name": "4Play Beach Sports", "coords": [-29.7642, -51.1458], "quadra": "praia", "classificacao": "4.7 Estrelas" },
//             { "name": "Orange Complexo Esportivo", "coords": [-29.7677, -51.1434], "quadra": "normal", "classificacao": "4.3 Estrelas" },
//             { "name": "Quintal Power", "coords": [-29.7712, -51.1410], "quadra": "normal", "classificacao": "5 Estrelas" }
//         ];


//         // Adicionando marcadores para as quadras de vôlei
//         quadras.forEach(function(quadra) {
//             var marker = L.marker(quadra.coords).addTo(map);
//             var popupContent = '<b>' + quadra.name + '</b><br>Quadra: ' + quadra.quadra + '<br>Classificação: ' + quadra.classificacao;
//             marker.bindPopup(popupContent);
//         });


let index = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;
    const carouselImages = document.querySelector('.carousel-images');
    const slideWidth = slides[0].offsetWidth; // Usa offsetWidth para a largura correta

    // Atualiza o índice
    index = (index + step + totalSlides) % totalSlides;

    // Define o transform para rolar as imagens
    carouselImages.style.transform = `translateX(-${index * slideWidth}px)`;
}