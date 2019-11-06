import { PersonAPI } from "../../src/resources/personAPI";

describe('Person Tests', ()=>{
    let n:number = 0;
    
    beforeAll(()=>{
        console.log("Testing Person API!");
    });
    afterAll(()=>{
        console.log("Testing Finished!")
    });
    beforeEach(()=>{
        n++;
        console.log(`Case ${n}:`);
    });

    it('saludar', ()=>{
        const mensaje = "Hola"

        const personAPI = new PersonAPI();
        personAPI.mensaje = mensaje;
        const resultado = personAPI.saludar();
        expect(resultado).toBe(`Este es tu mensaje ${mensaje}`);
    })

})