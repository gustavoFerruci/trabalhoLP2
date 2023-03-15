import * as express from 'express';
import PaisController from '../controllers/paiscontroller.js';

const pController = new PaisController()

const proutes=express.Router();

proutes.use(express.json());

proutes.get("/", pController.index);
  
// a) inserir um novo Pais no BD ao receber os dados de um país.
proutes.post("/inserir", pController.inserir)

// // b) recuperar um país pelo seu id. Retorne os dados do pais na forma de json.
proutes.get("/selecionar-pais/:id", pController.exibirUm);

// // // b) fazer busca por países ao receber como parâmetro parte do nome do Pais. Deve retornar uma lista json.
proutes.get("/selecionar-nome/:nome", pController.exibirNome);

// // // c) fazer busca por paises dado o idioma. Deve retornar uma lista json
proutes.get("/selecionar-idioma/:idioma", pController.exibirIdioma);

    
 
    

    

    



// proutes.get("/selecionar-varios", pController.selecionarVarios);

// proutes.get("/selecionar-varios", pController.selecionarVarios);


export default proutes
