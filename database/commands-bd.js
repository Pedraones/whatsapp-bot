const instance = require('./instance-bd');
const client = instance.initPool();

async function getWithoutParameters(){ 
    try{
        const result = await client.query('SELECT (idpedido, clientepedido, comandapedido, valorpedido) FROM pedidos')
        return result.rows;
    }
    catch(error){
        return null;
    }
}

async function getWithParameters(nome){
    if(nome){
        const value = [nome.toLowerCase()];
        
        const result = await client.pool.query('SELECT (idpedido, clientepedido, comandapedido, valorpedido) FROM pedidos WHERE clientepedido = $1', value);
        
        return result.rows;
    }
    else{
        console.log("passe um nome");
    }
}

async function createNewOrder(nomeCliente, valor, comanda) {
    if(nomeCliente && valor && comanda){
        const values = [comanda, valor, false, nomeCliente];

        await client.pool.query(`INSERT INTO pedidos(comandapedido, valorpedido, finalizadopedido, clientepedido) VALUES($1, $2, $3, $4)`, values);
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
}

async function deleteOrder(idOrder) {
    if(idOrder){
        const values = [idOrder];

        await client.pool.query(`DELETE FROM pedidos WHERE idpedido = $1`, values);
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
}

async function updateOrder(idOrder, fieldWillUpdate, value) {
    if(fieldWillUpdate && value){
        const verifyFieldIsStateOrder = fieldWillUpdate.includes("finalizado");
        const verifyNewValueIsS = value.includes('s');

        if(verifyFieldIsStateOrder && verifyNewValueIsS){
            await deleteOrder(idOrder);
        }
        else{
            if(fieldWillUpdate == "nome") fieldWillUpdate = "cliente";
            const values = [value, idOrder];
            const query = `UPDATE pedidos SET ${fieldWillUpdate}pedido = $1 WHERE idpedido = $2`

            await client.pool.query(query, values);
        }
    }
    else{
        return "Verifique se voce inseriu todos os dados";
    }
}

module.exports = {
    getWithoutParameters:getWithoutParameters,
    getWithParameters: getWithParameters,
    createNewOrder: createNewOrder,
    deleteOrder: deleteOrder,
    updateOrder: updateOrder
}