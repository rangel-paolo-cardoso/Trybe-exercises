const grid = document.getElementById('grid');
const cartas = [
    'cartas/cinco-de-ouros.png',
    'cartas/nove-de-espadas.png',
    'cartas/quatro-de-paus.png',
    'cartas/sete-de-espadas.png',
    'cartas/sete-de-paus.png',
    'cartas/tres-de-ouros.png'
];

function posCarta() {
    return Math.floor(Math.random() * cartas.length);
}

function pegaCarta() {
    const img = document.createElement('img');
    img.src = cartas[posCarta()];
    grid.appendChild(img);
}