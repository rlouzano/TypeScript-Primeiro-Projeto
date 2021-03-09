class Cliente {

    constructor(private _nome: string, private _rg: string) { }

    get nome() {
        return this._nome;
    }

    get rg() {
        return this._rg;
    }


}