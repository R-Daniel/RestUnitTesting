export interface CRUD<T> {
    c(o:T):number
    r(n:number):T
    u(n:number, o:T):void
    d(n:number):void
}