const animals = ["tiger", "hest", "katt", "hund", "panda", "krokodille,", "katt", "hare", "elefant", "gorilla"];
console.log(animals);

function randomAnimal() {
    return animals[Math.floor(Math.random() * animals.length)];
} 

console.log(randomAnimal());

