export interface CRUD {
    c(o:object):number
    r(n:number):object
    u(n:number, o:object):void
    d(n:number):void
}