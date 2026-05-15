const commands = require('../../../database/commands-bd');
const pool = require('../../../database/instance-bd');

test("Verificação se o comando de ver todos os pedidos", async() => {
    const res = await commands.getWithoutParameters();
    expect(res).toBeDefined();
});