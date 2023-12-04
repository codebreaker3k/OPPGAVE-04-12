const animals = ["tiger", "hest", "katt", "hund", "panda", "krokodille,", "katt", "hare", "elefant", "gorilla"];
console.log(animals);

function randomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
} 

console.log(randomAnimal());

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

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    const nextImageSrc = `bilder/${images[currentImageIndex]}`;
    dyrBilde.src = nextImageSrc;
}