class ClienteController {

    private inputNome: HTMLInputElement;
    private inputRg: HTMLInputElement;
    private list = new ListaClientes();
    private view = new ClienteView("#table");  /* PASSEI NO CONSTRUTOR DA CLASSE UM DOCUMENT.QUERYSELECTOR */

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector('#nome');
        this.inputRg = <HTMLInputElement>document.querySelector('#rg');
        this.view.update(this.list); //ATUALIZAR A LISTA COM OS DADOS NA TABELA
    }

    adicionar(event: Event): void {
        event.preventDefault();
        const cliente = new Cliente(String(this.inputNome.value), String(this.inputRg.value));
        if (this._validaNome(true) == true) {
            this.list.adiciona(cliente);
            this.view.update(this.list);// INCLUIR UMA LISTA MAIS ATUALIZADA
        } else {
            alert('Nome repetido')
        }

    }

    _validaNome(valida: boolean): Boolean {
        this.list.pegaTodos().map(n => {
            if (n.nome != String(this.inputNome.value)) {
                return valida = true;
            } else {
                return valida = false;
            }
        })
        return valida;
    }

}