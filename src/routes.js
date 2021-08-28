// Criei API seguindo : https://www.youtube.com/watch?v=xjdBBl5GK4k

const express = require('express'); 
const router = express.Router();
const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro/inserir', CarroController.inserir);
router.put('/carro/alterar/:codigo', CarroController.alterar);
router.delete('/carro/excluir/:codigo', CarroController.excluir);

module.exports = router;