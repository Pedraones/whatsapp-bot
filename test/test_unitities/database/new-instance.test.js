const instance = require('../../../database/instance-bd');

test("Teste de chamada para inciar instancia com o banco e se houve sucesso", async () => {
    const pool = instance.initPool();

    expect(pool).toBeDefined();
});