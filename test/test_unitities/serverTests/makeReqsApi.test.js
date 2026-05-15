const makeReqs = require('../../../server/makeReqsApi');

test("Teste de verificação se a chamada do método que faz requisição para a API foi chamado", async () => {
    const res = makeReqs.makeReqsWithApi("teste");

    expect(res).toBeTruthy();
});