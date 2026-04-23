const commands = require('./commands-bd');
const send = require('../api/sendMessages')
const treatment = require('./treatmentResponse')

async function callComandBd(datas){
    const action = datas[0];
    let res;
    const orders = [];

    switch(action){
        case "#VER TODOS OS PEDIDOS#":
            res = await commands.getWithoutParameters();
            res.forEach(element => {
                const responseTreated = treatment.treatmentResponseBD(element.row);
                orders.push(responseTreated);
            });
            
            send.sendAllOrders(orders);
            break;
        
        case "#VER PEDIDO ESPECIFICO#":
            res = await commands.getWithParameters(datas[1]);
            res.forEach(element => {
                const responseTreated = treatment.treatmentResponseBD(element.row);
                orders.push(responseTreated);
            });
            
            send.sendAllOrders(orders);
            break;
        
        case "#ADICIONAR PEDIDO#":
            console.log(datas);
            await commands.createNewOrder(datas[1], datas[2], datas[3]);
            
    }
}

module.exports = {
    callComandBd: callComandBd
}