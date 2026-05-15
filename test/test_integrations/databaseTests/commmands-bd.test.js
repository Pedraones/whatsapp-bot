const commands = require('../../../database/commands-bd');

test("Verificação se o comando de ver todos os pedidos", async() => {
    const res = await commands.getWithoutParameters();
    expect(res).toBeDefined();
});

test("Verificação se o comando de ver pedido especifico esta funcionando", async() => {
    const res = await commands.getWithParameters("pedro");
    expect(res).toBeDefined();
});