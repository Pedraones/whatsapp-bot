const verify = require('../../../verifications/verifyReq');
require('dotenv').config()

test("Teste de verificação do remetente da requisição", () => {
    const channelId = process.env.CHANNEL_ID_BODY_REQ;
    let rawHeaders = [20];
    rawHeaders[7] = process.env.BAGGAGE_REQ;
    rawHeaders[13] = process.env.X_FORWARDED_FOR;
    rawHeaders[15] = process.env.X_FORWARDED_HOST;

    const res = verify.verifyReq(channelId, rawHeaders);

    expect(res).toBe("Acesso permitido");
});