global.SECRET = "FIPP-UNOESTE-PRUDENTE";


import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import proutes from "./routes/paisroutes.js"
import uroutes from './routes/usuariosroutes.js';

const app = express();
app.use(proutes)
app.use(uroutes)
app.use(cors())
app.use(express.json())

// app.post("/autenticar", (req, res) => {
//     let usuario = req.body.user;
//     let senha = req.body.pass;
//     // verifica se o usuário existe e recupera seu ID...
//     let id = 1; //supondo ser o id de um usuário recuperado do banco
//     if (usuario != "" && senha != "") {
//         var token = jwt.sign({ id }, SECRET, { expiresIn: 60 }); //expira em 1 minuto
//         res.status(200).send({ auth: true, token: token });
//     }
//     else
//         res.send({ auth: false, mens: 'Falha ao autenticar' });
// });// executando o servidor

app.listen(8081, ()=>{
    console.log("Servidor na porta 8081");
});
