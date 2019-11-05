import { REST_API } from "./meta/rest";

export interface Person {
    name: string
    age: number
    mensaje: string
    edad: number
    dni: number

}

export class PersonAPI extends REST_API<Person> {
    mensaje: string

    saludar(){
        console.log(`Este es tu mensaje ${this.mensaje}`) 
    }
}

let main = () => 
{
    let persona= new PersonAPI()
    persona.mensaje="Hola"
    persona.saludar()



}
main()
