class ListaClientes {
    constructor() {
        this._listaClientes = [];
    }
    adiciona(cliente) {
        this._listaClientes.push(cliente);
    }
    pegaTodos() {
        return [].concat(this._listaClientes);
    }
}
