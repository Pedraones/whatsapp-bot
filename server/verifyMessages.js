const send = require('../api/sendMessages');

async function getMessages(messages){
    const chatCorrect = "5515996180975@s.whatsapp.net"
    
    if(messages){
        messages.forEach(element => {
            if(element.text && element.chat_id == chatCorrect){    
                switch (element.text.body){
                    case "#LISTAR COMANDOS#":
                        console.log("instrucao listar comandos")
                        send.sendListCommands();
                        break;
                    
                    case "#INSTRUCAO VER TODOS OS PEDIDOS#":
                        console.log("instrucao ver pedidos");
                        send.sendStructGetAllOrder();
                        break;
                        
                    case "#INSTRUCAO VER PEDIDO ESPECIFICO#":
                        send.sendStructGetOrderSpecified()
                        console.log("instrucao ver pedido especifico");
                        break;
                    
                    case "#INSTRUCAO ADICIONAR PEDIDO#":
                        console.log("instrucao adicionar pedidos");
                        send.sendStructAddOrder();
                        break;
                    
                    case "#INSTRUCAO ATUALIZAR PEDIDO#":
                        console.log("instrucao atualizar pedido");
                        send.sendStructUpdateOrderSpecified();
                        break;
                }
            }
        });
    }
}

module.exports = {
    getMessages: getMessages
}