import postgres from "pg";
const { Client } = postgres;
import Banco from "../banco.js";
import Pais from '../models/paisdal.js';

const p = new Pais;

export default class PaisController {
    
    async index(req, res) {
        const paises = await p.selecionarVarios("");
        res.json(paises);
    }

    async inserir(req, res) {
        const pais = req.body;
        const resposta = await p.gravar(pais);
        res.json(resposta);
    }

    async exibirUm(req, res) {
        const id = req.params.id;
        const resposta = await p.selecionarUm(id);
        res.json(resposta);
    }

    async exibirNome(req, res) {
        const sql = `nome LIKE '%${req.params.nome}%'`;
        const resposta = await p.selecionarVarios(sql);
        res.json(resposta)
    }

    async exibirIdioma(req, res) {
        const sql = `idioma LIKE '%${req.params.idioma}%'`;
        const resposta = await p.selecionarVarios(sql);
        res.json(resposta)
    }

    async deletar(req, res) {
        const pais = req.params.id;
        const resposta = await p.apagar(pais);
        res.json(resposta);
    }

}