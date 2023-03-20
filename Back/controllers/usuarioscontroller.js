global.SECRET = "FIPP-UNOESTE-PRUDENTE";

import postgres from "pg";
const { Client } = postgres;
import Banco from "../banco.js";
import Usuarios from '../models/usuariosdal.js';
import jwt from 'jsonwebtoken';

const p = new Usuarios;

export default class UsuariosController {
    
    // aqui vem o logar
    async index(req, res) {
        res.sendFile("C:/Users/gu_fe/OneDrive/Documentos/Faculdade/LP2/GustavoFerruci_262013452/Front/index.html");
    }

    async inserir(req, res) {
        const user = req.body;
        const resposta = await p.gravar(user);
        res.json(resposta);
    }

    async exibirUm(req, res) {
        const id = req.params.id;
        const resposta = await p.selecionarUm(id);
        res.json(resposta);
    }

    async login(req, res) {
        const usuario = req.body.usuario;
        const senha = req.body.senha;

        const resposta = await p.selecionarUser(usuario);
        if (resposta) {
            if (senha !== resposta.senha) {
                return res.send("Senha incorreta");
            }

            const token = jwt.sign({usuario}, SECRET, {expiresIn: '1h'});

            return res.json({token});
        }
        else
            return res.json(resposta)

    }

    async deletar(req, res) {
        const user = req.params.id;
        const resposta = await p.apagar(user);
        res.json(resposta);
    }

}