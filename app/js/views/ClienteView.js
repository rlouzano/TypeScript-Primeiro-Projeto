class ClienteView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.tempate(model);
    }
    tempate(model) {
        return `
                <thead>
                    <tr>
                        <th scope="col">Nome Completo</th>
                        <th scope="col">RG</th>
                    </tr>
                </thead>
                <tbody>${model.pegaTodos().map(n => `
                    <tr>
                        <th scope="row">${n.nome}</th>
                        <td>${n.rg}</td>
                    </tr>
                    `).join('')}
                </tbody>
                `;
    }
}
