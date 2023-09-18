    let {instrutores, identificadorInstrutor} = require("../bancoDeDados");
        
    const listarInstrutores = (req, res) => {       //para buscar todos os instrutores
        return res.status(200).json(instrutores);

    }

    const obterInstrutor = (req, res) =>{     // para buscar um instrutor especifico
        
        const {id} = req.params;           //pegamos todos os parametros da rota

        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(id);
        });

        if(!instrutor){
            return res.status(404).json({mensagem: "Instrutor não encontrado"});
        }

        return res.status(200).json(instrutor);
    } 

    const cadastrarInstrutor = (req, res) => {     // POST para cadastrar um novo recurso de uma colecao
        const {nome, email, status} = req.body;

        if(!nome){
            return res.status(400).json({mensagem: "O nome é obrigatório"})
        };
        if(!email){
            return res.status(400).json({mensagem: "O emial é obrigatório"})
        };

    const instrutor = {           // dados do banco de dados para serem criados
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }
    instrutores.push(instrutor);  // para inscluir no array de instrutores

    return res.status(201).json(instrutor);
    };

    const atualizarInstrutor = (req, res) =>{   // PUT para atualizar o banco de dados no servidor
        const {id} = req.params; // peguei o ID 
        const {nome, email, status} = req.body; // peguei todas as informações que vem do Body na requisicao

        //validação, para ver se realmente foi passado
        if(!nome){
            return res.status(400).json({mensagem: "O nome é obrigatório"})
        };
        if(!email){
            return res.status(400).json({mensagem: "O email é obrigatório"})
        };

        const instrutor = instrutores.find((instrutor) => { // fui na colecao e verifiquei se realmente o instrutor existe
            return instrutor.id === Number(id);
        });

        if(!instrutor){
            return res.status(404).json({mensagem: "Instrutor não encontrado"});
        }

        //atualizacoes de instrutor no banco de dados
        instrutor.nome = nome;
        instrutor.email = email;
        instrutor.status = status;

        return res.status(204).send(); //não envia nada, apenas o status, por isso não utilizou o JSON.
    
    }

    const atualizarStatusInstrutor = (req, res) => {
        const {id} = req.params; // peguei o ID 
        const {status} = req.body;

        const instrutor = instrutores.find((instrutor) => {  // fui na colecao e verifiquei se realmente o instrutor existe
            return instrutor.id === Number(id);
        });

        if(!instrutor){
            return res.status(404).json({mensagem: "Instrutor não encontrado"});
        }

        //atualizacoes de instrutor no banco de dados
       
        instrutor.status = status;

        return res.status(204).send(); //não envia nada, apenas o status, por isso não utilizou o JSON.
    }

    const excluirInstrutor = (req, res) => {
        const {id} = req.params; // peguei o ID 
        const instrutor = instrutores.find((instrutor) => {
            return instrutor.id === Number(id);
        })
        if (!instrutor){
            return res.status(404).json({mensagem: "O instrutor não foi encontrado"})
        }
        
        instrutores = instrutores.filter((instrutor) => {
            return instrutor.id !== Number(id);
        });

        return status(204).send();

    }
    module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    atualizarInstrutor,
    atualizarStatusInstrutor,
    excluirInstrutor
    }