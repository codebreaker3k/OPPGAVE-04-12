
const animals = ["tiger", "hest", "katt", "hund", "panda", "krokodille,", "katt", "hare", "elefant", "gorilla"];
console.log(animals);

let currentImageIndex = 0;
const totalImages = 10;
const dyrBilde = document.getElementById('dyrBilde');
const images = [
    'hund.png',
    'katt.png',
    'panda.png',
    'krokodille.png',
    'slange.png',
    'hare.png',
    'gorilla.png',
    'elefant.png',
    'tiger.png',
    'hest.png'
];

function showRandomImage() {
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomImageSrc = `bilder/${randomAnimal}.png`;
    dyrBilde.src = randomImageSrc;
}

