function treatmentGetOrderSpecified(message){
    const nome = message[1].replace("Nome do cliente que tem pedido: ", "");

    const messageTreated = [message[0], nome];
    return messageTreated;
}

function treatmentAddOrder(message){
    const nome = message[1].replace("Nome: ", "");
    const pedido = message[2].replace("Pedido: ", "");
    const valor = message[3].replace("Valor: ", "");
    
    const messageTreated = [message[0], nome, pedido, valor];
    return messageTreated;
}
function treatmentUpdateOrder(message){
    const id = message[1].replace("Id do pedido: ", "");
    const campoSerAlterado = message[2].replace("A informação que deseja alterar: ", "");
    const novaInformacao = message[3].replace("Nova informação: ", "");

    const messageTreated = [message[0], id, campoSerAlterado, novaInformacao];
    return messageTreated;
}

function simpleTreatmentMessage(message){
    const text = message.body;
    const contentsLines = text.split("\n");
    return contentsLines;
}

module.exports = {
    treatmentGetOrderSpecified: treatmentGetOrderSpecified,
    treatmentAddOrder: treatmentAddOrder,
    treatmentUpdateOrder:treatmentUpdateOrder,
    simpleTreatmentMessage: simpleTreatmentMessage
}