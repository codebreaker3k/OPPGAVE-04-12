const animals = ["tiger", "hest", "katt", "hund", "panda", "krokodille,", "katt", "hare", "elefant", "gorilla"];
console.log(animals);

function randomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
} 

console.log(randomAnimal());

let currentImageIndex = 1;

function showNextImage() {
    const dyrBilde = document.getElementById('dyrBilde');
    currentImageIndex++;

    if (currentImageIndex > 10) {
        currentImageIndex = 1;
    }

    const nextImageSrc = `image${currentImageIndex}.jpg`;
    dyrBilde.src = nextImageSrc;
}