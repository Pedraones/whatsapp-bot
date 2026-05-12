const send = require('../api/sendMessages');
const treatment = require('../treatments/treatmentMessages');

async function getMessages(messages){
    const chatCorrect = "5515996180975@s.whatsapp.net"
    
    if(messages){
        let messageTreated;

        await messages.forEach(element => {
            if(element.text && element.chat_id == chatCorrect){  
                messageTreated = treatment.simpleTreatmentMessage(element.text);
                if(messageTreated){
                    switch (messageTreated[0]){
                        case "#LISTAR COMANDOS#":
                            break;

                        case "#INSTRUCAO VER TODOS OS PEDIDOS#":
                            break;
                            
                        case "#INSTRUCAO VER PEDIDO ESPECIFICO#":
                            break;
                        
                        case "#INSTRUCAO ADICIONAR PEDIDO#":
                            break;
                        
                        case "#INSTRUCAO ATUALIZAR PEDIDO#":
                            break;

                        case "#VER PEDIDO ESPECIFICO#":
                            messageTreated = treatment.treatmentGetOrderSpecified(messageTreated);
                            break;

                        case "#ADICIONAR PEDIDO#":
                            messageTreated = treatment.treatmentAddOrder(messageTreated);
                            break;

                        case "#ATUALIZAR PEDIDO#":
                            messageTreated = treatment.treatmentUpdateOrder(messageTreated);
                            break;
                    }
                }
            }              
        });
        return messageTreated;
    }
    return;
}

module.exports = {
    getMessages: getMessages
}