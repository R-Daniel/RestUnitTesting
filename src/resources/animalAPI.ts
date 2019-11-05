import { REST_API } from "./meta/rest";

export interface Animal {
    name: string
    patas: number
    genero: string
}

export default class AnimalAPI extends REST_API<Animal> {
    mensaje: string

    saludar(){
        console.log(`Este es tu mensaje ${this.mensaje}`) 
    }
}

let main = () => 
{
    let persona= new AnimalAPI()
    persona.mensaje="Hola"
    persona.saludar()

}
main()