const treatment = require('../../../treatments/treatmentResponse');

test("Teste do tratamento de mensagens do banco de dados", () => {
    const simulationResponse = {row: '(3, "pedro        ", "4 broches grandes     ", 20.4)'};

    const responseTreated = treatment.treatmentResponseBD(simulationResponse);

    expect(responseTreated).toEqual(['3', 'pedro', '4 broches grandes', '20.4']);
})