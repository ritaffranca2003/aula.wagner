const express = require('express');
const server = express();

//Query paramns =? npme=wagner&idade=27
server.get("/hello", (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;

    return res.json({
        title: "Hello word",
        mensagem: `Olá ${nome}`,
        idade: idade
    })

});

server.get("/hello/:nome", (req, res) => {
    const nome = req.query.nome;
    return res.json({
        title: "teste",
        mensagem: `Olá ${nome}`,
    })

});

server.listen(3000);