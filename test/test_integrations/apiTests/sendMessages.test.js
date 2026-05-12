const sendMessages = require('../../../api/sendMessages');

test("Teste de requisição para enviar a lista de comando", async() => {
    expect(await sendMessages.sendListCommands()).toBeTruthy();
});