import { REST_API } from "./meta/rest";

export interface Animal {
    name: string;
    specie: string;
    legs: number;
    wings: number;
    real: boolean;
}

export class AnimalAPI extends REST_API<Animal> {
    describe(n: number):void {
        const animal:Animal = this.r(n);
        if (animal.legs>0) console.log(`${animal.name} walks on ${animal.legs} legs!`);
        if (animal.wings>0) console.log(`${animal.name} flies with ${animal.legs} wings!`);
        if (animal.real) console.log(`${animal.name} is real!`);
    }
    greet(n: number): string{
        const animal:Animal = this.r(n);
        return `${animal.name} greets you!`
    }
    move(n:number):string {
        return "";
    }

}
