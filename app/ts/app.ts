const clienteController = new ClienteController();

let tarefa = document.querySelector("#forms").addEventListener("submit", clienteController.adicionar.bind(clienteController))