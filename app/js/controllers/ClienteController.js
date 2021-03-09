class ClienteController {
    constructor() {
        this.list = new ListaClientes();
        this.view = new ClienteView("#table"); /* PASSEI NO CONSTRUTOR DA CLASSE UM DOCUMENT.QUERYSELECTOR */
        this.inputNome = document.querySelector('#nome');
        this.inputRg = document.querySelector('#rg');
        this.view.update(this.list); //ATUALIZAR A LISTA COM OS DADOS NA TABELA
    }
    adicionar(event) {
        event.preventDefault();
        const cliente = new Cliente(String(this.inputNome.value), String(this.inputRg.value));
        if (this._validaNome(true) == true) {
            this.list.adiciona(cliente);
            this.view.update(this.list); // INCLUIR UMA LISTA MAIS ATUALIZADA
        }
        else {
            alert('Nome repetido');
        }
    }
    _validaNome(valida) {
        this.list.pegaTodos().map(n => {
            if (n.nome != String(this.inputNome.value)) {
                return valida = true;
            }
            else {
                return valida = false;
            }
        });
        return valida;
    }
}
