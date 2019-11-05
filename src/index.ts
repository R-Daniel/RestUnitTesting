interface CRUD {
    create(o:object):void
    read():object
    update(o:object):void
    delete():void
}

class PersonaREST implements CRUD {
    create(o: object): void {
        throw new Error("Method not implemented.");
    }    read(): object {
        throw new Error("Method not implemented.");
    }
    update(o: object): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
}