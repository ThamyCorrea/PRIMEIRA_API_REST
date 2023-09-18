const express = require("express");
const rotas = require("./rotas");

const app = express();

app.use(express.json()); // instancia do express e mappando um intermediario (middeware) que só aceita informações no formato JSON

app.use(rotas); // criado rota em arquivo separado


app.listen(3000);
console.log("Porta 3000");

