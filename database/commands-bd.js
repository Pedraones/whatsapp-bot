const client = require('./instance-bd');

async function getWithoutParameters(){
    await client.client.connect();
    
    const result = await client.client.query('SELECT (idpedido, clientepedido, comandapedido, valorpedido) FROM pedidos')
    
    await client.client.end();

    console.log(result.rows);
    return result.rows;
}

async function getWithParameters(nome){
    if(nome){
        const value = [nome.toLowerCase()];
        await client.client.connect();
        
        const result = await client.client.query('SELECT (idpedido, clientepedido, comandapedido, valorpedido) FROM pedidos WHERE clientepedido = $1', value);
        await client.client.end();
        
        console.log(result.rows);
        return result.rows;
    }
    else{
        console.log("passe um nome");
    }
}

module.exports = {
    getWithoutParameters:getWithoutParameters,
    getWithParameters: getWithParameters
}