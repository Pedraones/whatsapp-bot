const commands = require('../../../database/commands-bd');

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