const send = require('../api/sendMessages');
const treatment = require('./treatmentMessages');

async function getMessages(messages){
    const chatCorrect = "5515996180975@s.whatsapp.net"
    
    if(messages){
        messages.forEach(element => {
            if(element.text && element.chat_id == chatCorrect){  
                const messageTreated = treatment.simplesTreatmentMessage(element.text);

                if(messageTreated){
                    switch (messageTreated[0]){
                        case "#LISTAR COMANDOS#":
                            console.log("listar comandos")
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
                            
                        case "#VER TODOS OS PEDIDOS#":
                        console.log("ver todos os pedidos");
                        
                        break;

                        case "#VER PEDIDO ESPECIFICO#":
                        console.log("ver pedido especifico");
                        
                        break;

                        case "#ADICIONAR PEDIDO#":
                        console.log("adicionar pedido");
                        
                        break;

                        case "#ATUALIZAR PEDIDO#":
                        console.log("atualizar pedido");
                        
                        break;

                    }
                }
            }                       
        });
    }
}

module.exports = {
    getMessages: getMessages
}