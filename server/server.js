const express = require('express');
const app = express();
const verify = require('./verifyMessages')
const send = require('../api/sendMessages')
const call = require('../database/callCommands')
const commands = require('../database/commands-bd')

app.use(express.json());

app.get('/');

app.post('/webhook', async (req, res) => {
    const messages = await req.body.messages;
    const messageProcessed = await verify.getMessages(messages);
    if(messageProcessed){
      call.callComandBd(messageProcessed)
    }
});

app.listen(3000, () => {
  console.log('Server started');
});