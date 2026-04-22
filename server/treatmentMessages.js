function treatmentGetOrderSpecified(message){
    const nome = message[1].replace("Nome do cliente que tem pedido: ", "");
    console.log(nome);
}

function treatmentAddOrder(message){
    const nome = message[1].replace("Nome: ", "");
    const pedido = message[2].replace("Pedido: ", "");
    const valor = message[3].replace("Valor: ", "");
    
    console.log(nome);
    console.log(valor);
    console.log(pedido);
}

function simpleTreatmentMessage(message){
    const text = message.body;
    const contentsLines = text.split("\n");
    return contentsLines;
}

module.exports = {
    treatmentGetOrderSpecified: treatmentGetOrderSpecified,
    treatmentAddOrder: treatmentAddOrder,
    simpleTreatmentMessage: simpleTreatmentMessage
}