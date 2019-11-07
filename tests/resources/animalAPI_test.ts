import { Animal, AnimalAPI } from "../../src/resources/animalAPI";

describe('Animal Tests', ()=>{

    let animalAPI:AnimalAPI;
    let cat_id:number;
    let dog_id:number;
    let bird_id:number;
    let snake_id:number;
    let n:number = 0;
    
    beforeAll(()=>{
        console.log("Testing Animal API!");
        animalAPI = new AnimalAPI();

        const cat:Animal = {
            name: "Firulais",
            specie: "cat",
            legs: 4,
            wings: 0,
            real: true
        }
        cat_id = animalAPI.c(cat);
        
        const dog:Animal = {
            name: "Garfield",
            specie: "dog",
            legs: 4,
            wings: 0,
            real: true
        }
        dog_id = animalAPI.c(dog);

        const bird:Animal = {
            name: "Silvestre",
            specie: "bird",
            legs: 2,
            wings: 2,
            real: true
        }
        bird_id = animalAPI.c(bird);

        const snake:Animal = {
            name: "Piolin",
            specie: "snake",
            legs: 0,
            wings: 0,
            real: true
        }
        snake_id = animalAPI.c(snake);

        spyOn(animalAPI, "move").and.callFake((n:number):string => {
            const animal:Animal = animalAPI.r(n);
            if (animal.wings!=0) return `${animal.name} flies!`;
            else if (animal.legs>0) return `${animal.name} walks!`;
            else return `${animal.name} crawls!` ;
        });

    });
    beforeEach(()=>{
        n++;
        console.log(`Case ${n}:`);
    });
    afterEach(()=>{
        console.log("\tDone!");
    });
    afterAll(()=>{
        console.log("Testing Finished!")
    });

    it('greet', ()=>{
        expect(animalAPI.greet(cat_id)).toBe("Firulais greets you!");
        expect(animalAPI.greet(dog_id)).toBe("Garfield greets you!");
    });

    it('fly', ()=>{
        expect(animalAPI.move(bird_id)).toBe("Silvestre flies!");
    });

    it('walk', ()=>{
        expect(animalAPI.move(dog_id)).toBe("Garfield walks!");
    });

    it('crawl', ()=>{
        expect(animalAPI.move(snake_id)).toBe("Piolin crawls!");
    });

})