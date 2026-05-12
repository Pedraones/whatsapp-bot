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

describe("Teste para verificação do tratamento de mensagem para atualizar um pedido", () => {
    const newDatas = ["#ATUALIZAR PEDIDO#", 2];

    test("Atualizar um pedido no campo finalizado", () => {
        newDatas.push("finalizado");
        newDatas.push("s");
        const messageTreated = treatment.treatmentUpdateOrder(newDatas);

        expect(messageTreated).toEqual(["#ATUALIZAR PEDIDO#", 2, "finalizado", true]);
    })
});