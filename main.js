import postgres from "pg"
import PaisDAL from "./paisdal.js"
import PaisController from "./controllers/paiscontroller.js"

// const dal = new PaisDAL()
// dal.selecionarVarios("")
// .then(res=>{
//     for (let p of res)
//        console.log(p.nome)
// })

const ctr = new PaisController()
ctr.selecionarVarios("")
.then(res=>{
    for (let p of res)
       console.log(p.nome)
})

// const { Client } = postgres

// const client = new Client({
//     user: 'postgres', host: 'localhost',
//     database: 'paises', password: 'postgres123',
//     port: 5432
// })

// client.connect()
//     .then(() => {
//         console.log("Conectado...")
//         let id = 81;
//         client.query(`SELECT * from pais where id=${id}`)
//             .then(res => {
//                 console.log(res.rows[0]);
//                 client.end();
//             })
//             .catch(err => console.log("erro" + err));
//     }
//     )
//     .catch(err => console.log("erro" + err))