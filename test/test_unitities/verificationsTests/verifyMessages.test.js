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
            chat_id: "5515998942168@s.whatsapp.net",
            text: {
                body: "#LISTAR COMANDOS#"
            },
        }
    ];

    const command = ["#LISTAR COMANDOS#"];
    const res = await verify.getMessages(message);

    expect(res).toEqual(command);
})