function treatmentGetOrderSpecified(message){
    const nome = message[1];

    const messageTreated = [message[0], nome];
    return messageTreated;
}

function treatmentAddOrder(message){
    const nome = message[1];
    let valor = message[2];
    const pedido = message;
    
    const havePoint = valor.includes(".");

    if(!havePoint) valor = valor.concat(".00");

    const messageTreated = [message[0], pedido, valor, nome];

    return messageTreated;
}

function treatmentUpdateOrder(message){
    const id = message[1];
    const campoSerAlterado = message[2];
    let novaInformacao = message[3];

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