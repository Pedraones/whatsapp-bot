const sendMessages = require('../../../api/sendMessages');

test("Teste de requisição para enviar a lista de comando", async() => {
    expect(await sendMessages.sendListCommands()).toBeTruthy();
});

test("Teste de requisição para enviar a estrutura de adicionar um pedido", async() => {
    expect(await sendMessages.sendStructAddOrder()).toBeTruthy();
});

test("Teste de requisição para enviar a estrutura de como ver um pedido especifico", async() => {
    expect(await sendMessages.sendStructGetOrderSpecified()).toBeTruthy();
});

test("Teste de requisição para enviar a estrutura de como ver todos os pedidos", async() => {
    expect(await sendMessages.sendStructGetAllOrder()).toBeTruthy();
});

test("Teste de requisição para enviar a estrutura de como atualizar um pedido", async() => {
    expect(await sendMessages.sendStructUpdateOrderSpecified()).toBeTruthy();
});