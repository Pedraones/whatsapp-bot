const client = require('./instance-bd');

async function getWithoutParameters(){
    await client.client.connect();
    
    const result = await client.client.query('SELECT (idpedido, clientepedido, comandapedido, valorpedido) FROM pedidos')
    
    await client.client.end();

    console.log(result.rows);
    return result.rows;
}

module.exports = {
    getWithoutParameters:getWithoutParameters
}