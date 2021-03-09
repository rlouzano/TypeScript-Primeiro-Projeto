class Cliente {
    constructor(_nome, _rg) {
        this._nome = _nome;
        this._rg = _rg;
    }
    get nome() {
        return this._nome;
    }
    get rg() {
        return this._rg;
    }
}
