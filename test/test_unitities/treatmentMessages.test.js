const treatment = require('../../../treatments/treatmentMessages');

test("Teste para verificação do tratamento de mensagem para visualizar um pedido especifico", () => {
    const messageTreated = ["#VER PEDIDO ESPECIFICO#", "pedro"];

    expect(treatment.treatmentGetOrderSpecified(messageTreated)).toEqual(["#VER PEDIDO ESPECIFICO#", "pedro"]);
});