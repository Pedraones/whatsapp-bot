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

async function sendStructAddOrder(){
  var message = "Para adicionar um novo pedido siga o seguinte formato: \n" + 
                "Nome: \n" + 
                "Pedido: \n" + 
                "Valor: \n" +
                "Mais instrucoes: Mantenha os campos sinalizados anteriormente, apenas complete com as informacoes necessarias; Em 'Valor' nao insira 'R$', apenas coloque o valor, separando inteiros de centavos com um ponto(.); Em 'Finalizado', 'nao' deve ser sem ~";

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
  sendListCommands: sendListCommands,
  sendStructAddOrder: sendStructAddOrder
}