const send = require('../api/sendMessages');

async function getMessages(messages){
    const chatCorrect = "5515996180975@s.whatsapp.net"
    
    if(messages){
        messages.forEach(element => {
            if(element.text && element.chat_id == chatCorrect){    
                switch (element.text.body){
                    case "#LISTAR COMANDOS#":
                        console.log("listar comandos")
                        send.sendListCommands();
                        break;
                    
                    case "#VER PEDIDOS#":
                        console.log("ver pedidos");
                        break;
        
                    case "#VER PEDIDO ESPECIFICO#":
                        console.log("ver pedido especifico");
                        break;
                    
                    case "#ADICIONAR PEDIDOS#":
                    console.log("adicionar pedidos");
                    break;
                    
                    case "#ATUALIZAR PEDIDO#":
                    console.log("atualizar pedidos");
                    break;
                }
            }
        });
    }
}

module.exports = {
    getMessages: getMessages
}