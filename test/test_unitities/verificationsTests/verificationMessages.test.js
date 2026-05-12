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