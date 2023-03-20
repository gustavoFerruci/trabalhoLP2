import postgres from "pg";
const { Client } = postgres;
import Banco from "../banco.js";
import Usuario from "../usuarios.js";

export default class UsuariosDAL {
    
    async selecionarUm(id) {
        let client = await new Banco().conectar();
        let user = new Usuario(0, "", "");
        try {
            let res = await client.query(`SELECT * from usuarios where id=${id}`);
            if (res.rows.length > 0)
                user = res.rows[0];
        }
        finally {
            client.end();
        }
        return user;
    }

    async selecionarUser(usuario) {
        let client = await new Banco().conectar();
        let user = new Usuario(0, "", "");
        try {
            let res = await client.query(`SELECT * from usuarios where login='${usuario}'`);
            if (res.rows.length > 0)
                user = res.rows[0];
        }
        finally {
            client.end();
        }
        return user;
    }

    async selecionarVarios(filtro) {
        let client = await new Banco().conectar();
        let query = "SELECT * from usuarios"
        if (filtro != "")
            query = query + ` where ${filtro}`;

        try {
            let res = await client.query(query);
            return res.rows;
        }
        finally { client.end(); }
    }

    async gravar(usuario) {
        let client = await new Banco().conectar();
        let sql = "INSERT INTO usuarios VALUES (default,$1,$2)";
        let values = Object.values(usuario).slice(1); //retira o id do país
        try {
            let res = await client.query(sql, values);
            return res.rowCount>0;
        }
        catch(Exception)
        {
            return false;
        }
        finally {
            client.end();
        }
    }

    async alterar(usuario) {
        let client = await new Banco().conectar();
        let sql = "UPDATE usuarios SET id=$1, login=$2, senha=$3 WHERE id = $1";
        let values = Object.values(usuario);
        try {
            let res = await client.query(sql, values);
            return res.rowCount;
        }
        finally {
            client.end();
        }
    }
    async apagar(id) {
        let client = await new Banco().conectar();
        let sql = "DELETE FROM usuarios WHERE id = " + id;
        try {
            return (await client.query(sql)).rowCount;
        }
        finally {
            client.end();
        }
    }
}
