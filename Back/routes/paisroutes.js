global.SECRET = "FIPP-UNOESTE-PRUDENTE";

import * as express from 'express';
import PaisController from '../controllers/paiscontroller.js';
import Login from "../middleware/login.js";

const pController = new PaisController();

const pLogin = new Login();

const proutes=express.Router();

proutes.use(express.json());

  
// a) inserir um novo Pais no BD ao receber os dados de um país.
proutes.post("/inserir", pLogin.autenticar, pController.inserir)

// b) recuperar um país pelo seu id. Retorne os dados do pais na forma de json.
proutes.get("/selecionar-pais/:id", pLogin.autenticar, pController.exibirUm);

// b) fazer busca por países ao receber como parâmetro parte do nome do Pais. Deve retornar uma lista json.
proutes.get("/selecionar-nome/:nome", pLogin.autenticar, pController.exibirNome);

// c) fazer busca por paises dado o idioma. Deve retornar uma lista json
proutes.get("/selecionar-idioma/:idioma", pLogin.autenticar, pController.exibirIdioma);


proutes.delete("/:id", pController.deletar);


export default proutes
// app.get("/proxima-tarefa", (req, res) => {
//     if (verAutenticacao(req)) {
//         res.send({ auth: true, mens: 'Vá para casa!' })
//     }
//     else
//         res.send({ auth: false, mens: 'Acesso não permitido' })
// })

// function verAutenticacao(req) {
//     // recuperando o token do cabeçalho
//     let token = req.headers['x-access-token'];
//     if (!token) { return false; }
//     var payload; //possui informações sobre o token (id, criação, expiração); não é utilizado aqui 
//     try {
//         payload = jwt.verify(token, SECRET);
//     }
//     catch { return false; /* erro de validação e expiração*/ }
//     return true;
// }