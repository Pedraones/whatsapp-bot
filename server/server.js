const express = require('express');
const app = express();
const verify = require('./verifyMessages');
const send = require('../api/sendMessages');
const call = require('../database/callCommands');
const commands = require('../database/commands-bd');
const verifyReq = require('./verifyReq');

app.use(express.json());

app.get('/');

app.post('/webhook', async (req, res) => {
  const channelIdReq = await req.body.channel_id;
  const rawHeadersReq = await req.rawHeaders;

  const secure = verifyReq.verifyReq(channelIdReq, rawHeadersReq);

  if(secure){
    const messages = await req.body.messages;
    const messageProcessed = await verify.getMessages(messages);
    if(messageProcessed){
      call.callComandBd(messageProcessed)
    }
  }
});

app.listen(3000, () => {
  console.log('Server started');
});

/*
 body: {
    messages: [ [Object] ],
    event: { type: 'messages', event: 'post' },
    channel_id: 'PUNISH-86FWR'
  },

*/

/*
rawHeaders: [
    'Host',
    'unquarrelling-ibrahim-sanguinolent.ngrok-free.dev',
    'Content-Length',
    '230',
    'Accept',
    'application/json',
    'Baggage',
    'sentry-environment=prod,sentry-public_key=22217dc31eef5d21afad60404664acb9,sentry-trace_id=84161c37841145d58974dd2ceb8d2d90',
    'Content-Type',
    'application/json',
    'Sentry-Trace',
    '84161c37841145d58974dd2ceb8d2d90-a2fb0382648c7d70',
    'X-Forwarded-For',
    '157.180.57.166',
    'X-Forwarded-Host',
    'unquarrelling-ibrahim-sanguinolent.ngrok-free.dev',
    'X-Forwarded-Proto',
    'https',
    'Accept-Encoding',
    'gzip'
  ],
*/