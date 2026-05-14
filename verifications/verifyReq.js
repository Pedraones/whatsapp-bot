require('dotenv').config()

function verifyReq(channelIdParam, rawHeaders){
    const channelIdOfParam = channelIdParam;
    const channelId = process.env.CHANNEL_ID_BODY_REQ;
    const baggage = process.env.BAGGAGE_REQ;
    const xForwradedFor = process.env.X_FORWARDED_FOR;
    const xForwradedHost = process.env.X_FORWARDED_HOST;

    const fieldsRawHeaders = [rawHeaders[7], rawHeaders[13], rawHeaders[15]];

    if(channelId == channelIdOfParam && 
        fieldsRawHeaders[0] == baggage && 
        fieldsRawHeaders[1] == xForwradedFor && 
        fieldsRawHeaders[2] == xForwradedHost) return "Acesso permitido";

    return false;
}

module.exports = {
    verifyReq: verifyReq
}