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

test("Teste de verificação de quando a mensagem é o comando de VER PEDIDO ESPECIFICO", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#VER PEDIDO ESPECIFICO#\n" + "pedro"
            },
        }
    ];

    const command = ["#VER PEDIDO ESPECIFICO#","pedro"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de ADICIONAR PEDIDO", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#ADICIONAR PEDIDO#\n" + "pedro\n" + "20.0\n" + "5 chaveiros de biscuit"
            },
        }
    ];

    const command = ["#ADICIONAR PEDIDO#","5 chaveiros de biscuit","20.0","pedro"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de ATUALIZAR PEDIDO, alterando o campo nome", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#ATUALIZAR PEDIDO#\n" + "13\n" + "nome do cliente\n" + "miguel"
            },
        }
    ];

    const command = ["#ATUALIZAR PEDIDO#","13","nome do cliente","miguel"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});

test("Teste de verificação de quando a mensagem é o comando de ATUALIZAR PEDIDO, alterando o campo valor", async() => {
    const message = [
        {
            chat_id: "5515996180975@s.whatsapp.net",
            text: {
                body: "#ATUALIZAR PEDIDO#\n" + "13\n" + "valor\n" + "12.9"
            },
        }
    ];

    const command = ["#ATUALIZAR PEDIDO#","13","valor","12.9"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
});