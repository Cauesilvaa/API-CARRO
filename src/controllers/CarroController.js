const CarroService = require('../service/CarroServise');

module.exports = {
    buscarTodos: async (req, res) => {
        try {

            let json = { result: [] };

            let carros = await CarroService.buscarTodos();

            for (let i in carros) {
                json.result.push({
                    codigo: carros[i].codigo,
                    descricao: carros[i].modelo,
                    placa: carros[i].placa
                })
            }
            res.json(json);

        } catch (error) {
            console.log(error)
        }
    },

    buscarUm: async (req, res) => {
        try {

            let json = { result: {} };

            // Passa o codigo como parametro
            let codigo = req.params.codigo;

            let carro = await CarroService.buscarUm(codigo);

            // Se tiver carro joga no 'result' do 'json'
            if (carro) {
                json.result = carro;
            }
            res.json(json);
        } catch (error) {
            console.log(error)
        }
    },

    inserir: async (req, res) => {

        let json = { error: '', result: {} };

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        // Se tiver 'modelo' e 'placa' insere passando 'modelo' e placa'
        if (modelo && placa) {
            let carroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },

    alterar: async (req, res) => {

        let json = { error: '', result: {} };

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        // Se tiver 'modelo' e 'placa' insere passando 'modelo' e placa'
        if (codigo && modelo && placa) {
            await CarroService.alterar(codigo, modelo, placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else {
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        
        let json = { error: '', result: {} };

        await CarroService.excluir(req.params.codigo);

        res.json({message:"Excluido", json});
    }

}