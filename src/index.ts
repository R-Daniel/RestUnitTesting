import { Animal, AnimalAPI } from "./resources/animalAPI";

const animalAPI = new AnimalAPI();

const cat:Animal = {
    name: "Firulais",
    specie: "cat",
    legs: 4,
    wings: 0,
    real: true
}
const cat_id = animalAPI.c(cat);

const dog:Animal = {
    name: "Garfield",
    specie: "dog",
    legs: 4,
    wings: 0,
    real: true
}
const dog_id = animalAPI.c(dog);

console.log(cat_id, animalAPI.r(cat_id))
console.log(dog_id, animalAPI.r(dog_id))