const treatment = require('../../treatments/treatmentMessages');

test("Teste para verificação do tratamento de mensagem para visualizar um pedido especifico", () => {
    const messageTreated = ["#VER PEDIDO ESPECIFICO#", "pedro"];

    expect(treatment.treatmentGetOrderSpecified(messageTreated)).toEqual(["#VER PEDIDO ESPECIFICO#", "pedro"]);
});

test("Teste para verificação do tratamento de mensagem para adicionar um pedido", () => {
    const newOrder = ["#ADICIONAR PEDIDO#", "Beatriz", "20.5", "2 broches pequenos"];

    const messageTreated = treatment.treatmentAddOrder(newOrder);

    expect(["#ADICIONAR PEDIDO#", "2 broches pequenos", "20.5", "Beatriz"]).toEqual(messageTreated);
});

test("Atualizar um pedido no campo finalizado", () => {
    const newDatas = ["#ATUALIZAR PEDIDO#", 2, "finalizado", "s"];
    
    const messageTreated = treatment.treatmentUpdateOrder(newDatas);

    expect(messageTreated).toEqual(["#ATUALIZAR PEDIDO#", 2, "finalizado", true]);
});