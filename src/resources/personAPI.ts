import { REST_API } from "./meta/rest";

export interface Person {
    name: string
    age: number
    mensaje: string
    edad: number
    dni: number
}

export class PersonAPI extends REST_API<Person> {
    mensaje: string = "";
    constructor(){
        super();
    };
    saludar(){
        return `Este es tu mensaje ${this.mensaje}`;
    };
    comer(comida:string):string {
        return "Comi algo!";
    }
}
