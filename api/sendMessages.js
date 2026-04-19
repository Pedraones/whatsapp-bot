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

async function sendStructGetOrderSpecified(){
  var message = "Para visualizar um pedido siga o seguinte formato: \n" + 
                "Nome do cliente que tem pedido: \n" + 
                "Mantenha o texto anterior, apenas insira o nome do cliente a frente com 1 espaco depois dos ':'";

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

async function sendStructGetAllOrder(){
  var message = "Para ver todos o pedidos apenas digite: #VER TODOS OS PEDIDOS#"

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

async function sendStructUpdateOrderSpecified(){
  var message = "Para atualizar um pedido siga o seguinte formato: \n" + 
                "Id do pedido: \n" +
                "A informação que deseja alterar (comanda, valor, nome do cliente): \n" + 
                "Novo informacação: \n" + 
                "Mantenha o texto anterior, apenas insira o id do pedido, a informação a ser alterada (da forma como está, mas para mudar o nome do cliente coloque apenas 'nome') e a nova informação";

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
  sendStructAddOrder: sendStructAddOrder,
  sendStructGetOrderSpecified: sendStructGetOrderSpecified,
  sendStructGetAllOrder: sendStructGetAllOrder,
  sendStructUpdateOrderSpecified: sendStructUpdateOrderSpecified
}