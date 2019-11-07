import { PersonAPI } from "../../src/resources/personAPI";

describe('Person Tests', ()=>{
    let n:number = 0;
    
    beforeAll(()=>{
        console.log("Testing Person API!");
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
    

    it('saludar', ()=>{
        const mensaje = "Hola"
        const personAPI = new PersonAPI();
        personAPI.mensaje = mensaje;
        
        const resultado = personAPI.saludar();
        expect(resultado).toBe(`Este es tu mensaje ${mensaje}`);
    });

    it('comer', ()=>{
        const comida = "Ají de Gallina";
        const personAPI = new PersonAPI();
        
        spyOn(personAPI, "comer").and.callFake(
            (comida:string) => {
                return `Comí ${comida}!`;
            }
        );

        const resultado = personAPI.comer(comida);
        expect(resultado).toBe(`Comí ${comida}!`);
    });

})