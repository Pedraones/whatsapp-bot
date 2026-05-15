require('dotenv').config()
const url = 'https://gate.whapi.cloud/messages/text';

async function sendListCommands(){
  var message = "Lista de todos os comandos disponiveis: \n\n" + 
  "#INSTRUCAO VER TODOS OS PEDIDOS# = Fala como faz para ver as informacoes todos os pedidos \n" + 
  "#INSTRUCAO VER PEDIDO ESPECIFICO# = Fala como faz para ver as informacoes de um pedido especifico \n" +
  "#INSTRUCAO ADICIONAR PEDIDO# = Diz como faz para adicionar um novo pedido \n" +
  "#INSTRUCAO ATUALIZAR PEDIDO# = Instrui o que deve ser feito para atualizar 1 informacao de um pedido (se for dizer que o pedido foi finalizado, instantaneamente sera excluido, nao sendo possivel consulta-lo mais) \n" +
  "#ADICIONAR PEDIDO# = Adicionar um novo pedido \n" + 
  "#VER PEDIDOS# = Ver os pedidos pendentes \n" +
  "#VER PEDIDO ESPECIFICO# = Ver todas as informacoes de um pedido especifico \n" + 
  "#ATUALIZAR PEDIDO# = Atualizar os pedidos pendentes \n" + 
  "#LISTAR COMANDOS# = Lista os comandos existentes no momento";
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0, 
      to: '5515996180975@s.whatsapp.net', 
      body: message
    })
  };

  try{
    fetch(url, options).then(res => res.json());
    return true;
  }
  catch(error){
    console.log(error);
    return false;
  }
}

async function sendStructAddOrder(){
  var message = "Para adicionar um novo pedido siga o seguinte formato: \n" + 
                "Nome: \n" + 
                "Valor: \n" +
                "Pedido: \n" + 
                "Mais instrucoes: Apenas insira as informacoes necessarias, respeitando a ordem acima; Em 'Valor' nao insira 'R$', apenas coloque o valor, separando inteiros de centavos com um ponto(.);";

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0,
      to: '5515996180975@s.whatsapp.net',
      body: message
    })
  };

  try{
    fetch(url, options).then(res => res.json());
    return true;
  }
  catch(error){
    return error;
  }
}

async function sendStructGetOrderSpecified(){
  var message = "Para visualizar um pedido siga o seguinte formato: \n" + 
                "Nome do cliente que tem pedido: \n" + 
                "Apenas digite o nome do cliente";

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0,
      to: '5515996180975@s.whatsapp.net',
      body: message
    })
  };

  try{
    fetch(url, options).then(res => res.json());
    return true;
  }
  catch(error){
    return error;
  }
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
      to: '5515996180975@s.whatsapp.net',
      body: message
    })
  };

  fetch(url, options).then(res => res.json())
  .then(json => console.log(json)).catch(err => console.error(err));
}

async function sendStructUpdateOrderSpecified(){
  var message = "Para atualizar um pedido siga o seguinte formato: \n" + 
                "Id do pedido: \n" +
                "A informação que deseja alterar: (comanda, valor, nome do cliente, finalizado)\n" + 
                "Nova informacação: \n" + 
                "Insira o id do pedido (para ver o id, faça uma consulta do pedido, #VER PEDIDO ESPECIFICO#), a informação a ser alterada (da forma como está, mas para mudar o nome do cliente coloque apenas 'nome') e a nova informação (para 'finalizado', escreva s(sim)). As informações devem ser inseridas na mesma ordem descrita acima";

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0,
      to: '5515996180975@s.whatsapp.net',
      body: message
    })
  };

  fetch(url, options).then(res => res.json())
  .then(json => console.log(json)).catch(err => console.error(err));
}

async function sendAllOrders(datas){
  let message = "";
  
  datas.forEach(order => {
    message = message + "===========\n";
    order.forEach(field => {
      message = message + `${field} \n`
    })
  });
  
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: process.env.TOKEN_API
    },
    body: JSON.stringify({
      typing_time: 0,
      to: '5515996180975@s.whatsapp.net',
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
  sendStructUpdateOrderSpecified: sendStructUpdateOrderSpecified,
  sendAllOrders: sendAllOrders
}