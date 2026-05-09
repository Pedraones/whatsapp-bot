function treatmentGetOrderSpecified(message){
    const nome = message[1].replace("Nome do cliente que tem pedido: ", "");

    const messageTreated = [message[0], nome];
    return messageTreated;
}

function treatmentAddOrder(message){
    const nome = message[1].replace("Nome: ", "");
    let valor = message[2].replace("Valor: ", "");
    const pedido = message[3].replace("Pedido: ", "");
    
    const havePoint = valor.includes(".");

    if(!havePoint) valor = valor.concat(".00");

    const messageTreated = [message[0], pedido, valor, nome];

    return messageTreated;
}

function treatmentUpdateOrder(message){
    const id = message[1].replace("Id do pedido: ", "");
    const campoSerAlterado = message[2].replace("A informação que deseja alterar: ", "");
    let novaInformacao = message[3].replace("Nova informação: ", "");

    if(campoSerAlterado == "finalizado" && novaInformacao == "s") novaInformacao = true;

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