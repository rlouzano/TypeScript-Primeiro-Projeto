class ListaClientes {

    private _listaClientes: Array<Cliente> = [];


    adiciona(cliente: Cliente): void{
         this._listaClientes.push(cliente); 
    }

    pegaTodos(): Cliente[] {
        return [].concat(this._listaClientes);
    }


}