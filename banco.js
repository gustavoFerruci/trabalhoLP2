import postgres from "pg";
const { Client } = postgres;

export default class Banco {
    #param={user: 'postgres', host: 'localhost', database: 'paises', password: 'postgres123', port: 5432,};
    async conectar() {
        const client= new Client(this.#param);
        client.connect();
        return client;
    }
}