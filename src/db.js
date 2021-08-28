const mysql = require('mysql');

// Criando conexão mysql
const connection = mysql.createConnection({
    host: process.env.DB_HOST, //host: '127.0.0.1 ou localhost'
    user: process.env.DB_USER,  //user: 'root'
    password: process.env.DB_PASS, //passaword: 'root123'
    database: process.env.DB_NAME //database: 'apiCarros'
});

connection.connect((error)=>{
    
    // Se tem erro exibi erro
    if (error) throw error.stack;
   
    // Senão console.log ...
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)

})

module.exports = connection;