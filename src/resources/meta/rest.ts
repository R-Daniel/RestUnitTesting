import { CRUD } from "./crud";

export class REST_API<T> implements CRUD<T> {
    private records:Record<number, T> =  {};
    constructor(){}
    c(o: T): number {
        const n = Object.keys(this.records).length + 1;
        this.records[n] = o;
        return n;
    }
    r(n: number): T {
        return this.records[n];
    }
    u(n: number, o: T): void {
        this.records[n] = o;
    }
    d(n: number): void {
        delete this.records[n];
    }
}