const path = require("path");
const clienteModel = require("../models/clienteModel");
let id = 0;
let listaClientes = [];

class ClienteCrontoller {
  home(req, res) {
    //res.send('Rota dos clientes');
    res.sendFile(
      path.join(__dirname, "../public/html/cliente", "homepageCliente.html")
    );
  }
  formCadastro(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/html/cliente", "clienteForm.html")
    );
  }
  cadastro(req, res) {
    const { nome, email } = req.body;
    id++;
    let cliente = new clienteModel(id, nome, email);
    listaClientes.push(cliente);
    res.redirect("/cliente");
  }

  listarClientes(req, res) {
    res.json({ listaClientes });
  }

  visualizarClientes(req, res) {
    res.sendFile(
      path.join(__dirname, "../public/html/cliente", "listarClientes.html")
    );
  }
}

module.exports = new ClienteCrontoller();
