import postgres from "pg";
const { Client } = postgres;
import Banco from "../banco.js";
import Pais from "../pais.js";

export default class PaisDAL {
    
    async selecionarUm(id) {
        let client = await new Banco().conectar();
        let pais = new Pais(0, "", "", "");
        try {
            let res = await client.query(`SELECT * from pais where id=${id}`);
            if (res.rows.length > 0)
                pais = res.rows[0];
        }
        finally {
            client.end();
        }
        return pais;
    }
    async selecionarVarios(filtro) {
        let client = await new Banco().conectar();
        let query = "SELECT * from pais"
        if (filtro != "")
            query = query + ` where ${filtro}`;

        try {
            let res = await client.query(query);
            return res.rows;
        }
        finally { client.end(); }
    }

    async gravar(pais) {
        let client = await new Banco().conectar();
        let sql = "INSERT INTO pais VALUES (default,$1,$2,$3)";
        let values = Object.values(pais).slice(1); //retira o id do país
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

    async alterar(pais) {
        let client = await new Banco().conectar();
        let sql = "UPDATE pais SET id=$1, sigla=$2, idioma=$3, nome=$4 WHERE id = $1";
        let values = Object.values(pais);
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
        let sql = "DELETE FROM pais WHERE id = " + id;
        try {
            return (await client.query(sql)).rowCount;
        }
        finally {
            client.end();
        }
    }

}
