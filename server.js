
import express from 'express';
import proutes from "./routes/paisroutes.js"

const app = express();
app.use(proutes)
app.use(express.json())


app.listen(8081, ()=>{
    console.log("Servidor na porta 8081");
});


    