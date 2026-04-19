require('dotenv').config()
const url = 'https://gate.whapi.cloud/messages/text';

async function sendListCommands(){
  var message = "Lista todos os comandos disponiveis: \n#ADICIONAR PEDIDO# = Adicionar um novo pedido \n#VER PEDIDOS# = Ver os pedidos pendentes \n#ATUALIZAR PEDIDO# = Atualizar os pedidos pendentes \n#VER COMANDOS# = Lista os comandos existentes no momento";
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0, 
      to: '5515998282773@s.whatsapp.net', 
      body: message
    })
  };

  fetch(url, options).then(res => res.json())
  .then(json => console.log(json)).catch(err => console.error(err));
}

module.exports = {
    sendListCommands: sendListCommands
}