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

async function createNewOrder(nomeCliente, valor, comanda) {
    if(nomeCliente && valor && comanda){
        await client.client.connect();
        const values = [comanda, valor, false, nomeCliente];

        await client.client.query(`INSERT INTO pedidos(comandapedido, valorpedido, finalizadopedido, clientepedido) VALUES($1, $2, $3, $4)`, values);
        await client.client.end();
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
}

async function deleteOrder(idOrder) {
    if(idOrder){
        await client.client.connect();
        const values = [idOrder];

        await client.client.query(`DELETE FROM pedidos WHERE idpedido = $1`, values);
        await client.client.end();
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
}

async function updateOrder(idOrder, fieldWillUpdate, value) {
    if(fieldWillUpdate && value){
        if(fieldWillUpdate == "finalizado" && value == true){
            await deleteOrder(idOrder);
        }
        else{
            await client.client.connect();
            const values = [value, idOrder];

            await client.client.query(`UPDATE pedidos SET ${fieldWillUpdate}pedido = $1 WHERE idpedido = $2`, values);
        }
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
    await client.client.end();
}

module.exports = {
    getWithoutParameters:getWithoutParameters,
    getWithParameters: getWithParameters,
    createNewOrder: createNewOrder,
    deleteOrder: deleteOrder,
    updateOrder: updateOrder
}