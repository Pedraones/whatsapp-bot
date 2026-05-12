const verify = require('../../../verifications/verifyMessages');

test("Teste de verificação do contato que enviou mensagem", async () => {
    const message = [
        {
            chat_id: "5515998942168@s.whatsapp.net",
            text: "Verificando o contato que enviou a mensagem",
        }
    ];

    const res = await verify.getMessages(message);

    expect(res).toBeUndefined();
});

test("Teste de verificação de quando a mensagem não é um comando pro bot", async() => {
    const message = [
        {
            chat_id: "5515998942168@s.whatsapp.net",
            text: {
                body: "Verificando o contato que enviou a mensagem"
            },
        }
    ];

    const res = await verify.getMessages(message);

    expect(res).toBeUndefined();
});

test("Teste de verificação de quando a mensagem é o comando de LISTAR COMANDOS", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#LISTAR COMANDOS#"
            },
        }
    ];

    const command = ["#LISTAR COMANDOS#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de INSTRUCAO VER TODOS OS PEDIDOS", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#INSTRUCAO VER TODOS OS PEDIDOS#"
            },
        }
    ];

    const command = ["#INSTRUCAO VER TODOS OS PEDIDOS#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de INSTRUCAO VER PEDIDO ESPECIFICO", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#INSTRUCAO VER PEDIDO ESPECIFICO#"
            },
        }
    ];

    const command = ["#INSTRUCAO VER PEDIDO ESPECIFICO#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de INSTRUCAO ADICIONAR PEDIDO", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#INSTRUCAO ADICIONAR PEDIDO#"
            },
        }
    ];

    const command = ["#INSTRUCAO ADICIONAR PEDIDO#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de INSTRUCAO ATUALIZAR PEDIDO", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#INSTRUCAO ATUALIZAR PEDIDO#"
            },
        }
    ];

    const command = ["#INSTRUCAO ATUALIZAR PEDIDO#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});