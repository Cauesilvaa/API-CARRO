// Para ler o arquivo variaveis.env
// 'path' é o caminho
require('dotenv').config({path:'variaveis.env'});

const express = require('express');

// 'cors' serve para trabalhar com APIs, recursos de outros sites
const cors = require('cors');

// Para converter o body de resquisições para outros formatos
const bodyParser = require('body-parser');

// Apontando para o servidor onde vai estar as rotas
const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

// Coloquei para conseguir passar o body no postman, sem ele não ia
server.use(bodyParser.json())

// Para deixar uma rotra pre definida '/api ...'
server.use('/api', routes);

// Cria o servidor e passa a porta/'PORT' criado em 'variaveis.env'
server.listen(process.env.PORT, ()=> {
    console.log(`servidor rodando em: http://localhost:${process.env.PORT}`);
})