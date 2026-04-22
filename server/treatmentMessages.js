function treatmentGetOrderSpecified(message){
    const nome = message[1].replace("Nome do cliente que tem pedido: ", "");
    console.log(nome);
}

function simpleTreatmentMessage(message){
    const text = message.body;
    const contentsLines = text.split("\n");
    return contentsLines;
}

module.exports = {
    treatmentGetOrderSpecified: treatmentGetOrderSpecified,
    simpleTreatmentMessage: simpleTreatmentMessage
}