import { REST_API } from "./meta/rest";

export interface Person {
    name: string
    age: number
    mensaje: string
    edad: number
    dni: number

}

export default class PersonAPI extends REST_API<Person> {

    saludar(mensaje:string):string{
        return `Este es tu mensaje`
    }
}