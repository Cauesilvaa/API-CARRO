// Chamando a conexão no db.js
const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM carros', (error, result) =>{
                if (error) {
                    rejeitado(error);
                    return
                }
                aceito(result);
            })
        })
    },

    buscarUm: (codigo) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query(`select * from carros where codigo = ?`, [codigo], (error, results) => {
                
                if (error) {
                    rejeitado(error);
                    return
                }    

                // Se o retorno for maior que 0, quer dizer q existe ent passa o primeiro retornado
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (modelo, placa) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query(`INSERT INTO carros (modelo, placa) VALUES (?, ?)`, 
            [modelo, placa], (error, results) => {
                
                if (error) { rejeitado(error); return; }    
                aceito(results.insertCodigo);
            });
        });
    },

    alterar: (codigo, modelo, placa) =>{
        return new Promise((aceito, rejeitado) =>{
            db.query(`UPDATE carros SET modelo = ?, placa = ? where codigo = ?`, 
            [modelo, placa, codigo], (error, results) => {
                
                if (error) { rejeitado(error); return; }    
                aceito(results);
            });
        });
    },

    excluir: (codigo) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM carros WHERE codigo = ?',[codigo], (error, result) =>{
                if (error) {
                    rejeitado(error);
                    return
                }
                aceito(result);
            })
        })
    }, 
};