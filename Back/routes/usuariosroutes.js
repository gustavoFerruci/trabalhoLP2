global.SECRET = "FIPP-UNOESTE-PRUDENTE";

import * as express from 'express';
import UsuariosController from '../controllers/usuarioscontroller.js';
import Login from "../middleware/login.js";

const uController = new UsuariosController()

const uroutes=express.Router();

uroutes.use(express.json());

uroutes.get("/", uController.index);

uroutes.post("/autenticar", uController.login);
  
uroutes.post("/salvar", uController.inserir)

uroutes.delete("/:id", uController.deletar);


export default uroutes
