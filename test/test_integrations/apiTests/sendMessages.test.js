const sendMessages = require('../../../api/sendMessages');

/*
test("Teste de requisição para enviar a lista de comando", async() => {
    expect(await sendMessages.sendListCommands()).toBeTruthy();
});

test("Teste de requisição para enviar a estrutura de adicionar um pedido", async() => {
    expect(await sendMessages.sendStructAddOrder()).toBeTruthy();
});
*/

test("Teste de requisição para enviar a estrutura de como ver um pedido especifico", async() => {
    expect(await sendMessages.sendStructGetOrderSpecified()).toBeTruthy();
});