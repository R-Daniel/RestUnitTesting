import { REST_API } from "./meta/rest";

export interface Person {
    name: string
    age: number
    mensaje: string

}

export default class PersonAPI extends REST_API<Person> {

    saludar(){
        
    }
}