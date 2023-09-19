const bancodedados = {
    identificadorInstrutor: 3,  // cria id automáticamente
    instrutores: [
        {id: 1, nome: "Guido", email: "guido@emaiil.com", status: true},
        {id: 2, nome: "Dani", email: "danio@emaiil.com", status: true}
    ],

    aulas: [
        {
            id: 1,
            instrutor_id: 1,
            titulo: 'Primeiro Servidor',
            descricao: 'Construindo o primeiro servidor'
        }
    ]
}


module.exports = bancodedados

atualizaçÃo