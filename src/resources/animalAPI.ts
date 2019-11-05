import { REST_API } from "./meta/rest";

export interface Animal {
    name: string
}

export default class AnimalAPI extends REST_API<Animal> {

}