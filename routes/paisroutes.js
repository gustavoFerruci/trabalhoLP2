import express from 'express';
import PaisController from '../controllers/paiscontroller.js';

const pController = new PaisController()

const proutes=express.Router();


// a) inserir um novo Pais no BD ao receber os dados de um país.
proutes.post("/inserir", pController.gravar);
// proutes.post("/inserir-pais",(req, res) => {
//     const results = pController.gravar(req.body);
//     res.send(results);
//   });


// b) recuperar um país pelo seu id. Retorne os dados do pais na forma de json.
proutes.get("/selecionar-pais:id", pController.selecionarUm);

// b) fazer busca por países ao receber como parâmetro parte do nome do Pais. Deve retornar uma lista json.
proutes.get("/selecionar-por-nome:nome", pController.selecionarVariosNome);

// c) fazer busca por paises dado o idioma. Deve retornar uma lista json
proutes.get("/selecionar-por-idioma:idioma", pController.selecionarVariosIdioma);

    
 
    

    

    



// proutes.get("/selecionar-varios", pController.selecionarVarios);

// proutes.get("/selecionar-varios", pController.selecionarVarios);


export default proutes
