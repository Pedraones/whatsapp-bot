async function makeReqsWithApi(req){
    switch (req){
        case "#LISTAR COMANDOS#":
            send.sendListCommands();
            break;

        case "#INSTRUCAO VER TODOS OS PEDIDOS#":
            send.sendStructGetAllOrder();
            break;
            
        case "#INSTRUCAO VER PEDIDO ESPECIFICO#":
            send.sendStructGetOrderSpecified()
            break;
        
        case "#INSTRUCAO ADICIONAR PEDIDO#":
            send.sendStructAddOrder();
            break;
        
        case "#INSTRUCAO ATUALIZAR PEDIDO#":
            send.sendStructUpdateOrderSpecified();
            break;
    };
}

module.exports = {
    makeReqsWithApi: makeReqsWithApi
}