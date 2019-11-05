import { REST_API } from "./meta/rest";

export interface Animal {
    name: string;
    specie: string;
    legs: number;
    wings: number;
    real: boolean;
}

export class AnimalAPI extends REST_API<Animal> {}
