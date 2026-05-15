const commands = require('../../../database/commands-bd');
const treatmentResponse = require('../../../treatments/treatmentResponse');

test("Verificação se o comando de ver todos os pedidos", async() => {
    const res = await commands.getWithoutParameters();
    expect(res).toBeDefined();
});

test("Verificação se o comando de ver pedido especifico esta funcionando", async() => {
    const res = await commands.getWithParameters("pedro");
    expect(res).toBeDefined();
});

test("Verificação se o comando de adicionar pedido esta funcionando com '.' definido no campo valor", async() => {
    const res = await commands.createNewOrder("teste automatizado", 50.3, "4 broches");
    expect(res).toBe('Pedido adicionado');
});

test("Verificação se o comando de adicionar pedido esta funcionando sem '.' definido no campo valor", async() => {
    const res = await commands.createNewOrder("teste automatizado", 50, "4 broches");
    expect(res).toBe('Pedido adicionado');
});

test("Verificação se o comando de deletar pedido esta funcionando", async() => {
    let orders = await commands.getWithoutParameters();

    anyOrder = treatmentResponse.treatmentResponseBD(orders[0].row);

    const res = await commands.deleteOrder(anyOrder[0]);
    expect(res).toBe('Pedido deletado');
});