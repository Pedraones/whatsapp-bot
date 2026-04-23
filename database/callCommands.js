const commands = require('./commands-bd');
const send = require('../api/sendMessages')
const treatment = require('./treatmentResponse')

async function callComandBd(datas){
    const action = datas[0];
    let res;
    switch(action){
        case "#VER TODOS OS PEDIDOS#":
            const orders = [];
            res = await commands.getWithoutParameters();
            res.forEach(element => {
                const responseTreated = treatment.treatmentResponseBD(element.row);
                orders.push(responseTreated);
            });
            
            send.sendAllOrders(orders);
            break;
        
        case "#VER PEDIDO ESPECIFICO#":
            const orders = [];
            res = await commands.getWithParameters(datas[1]);
            res.forEach(element => {
                const responseTreated = treatment.treatmentResponseBD(element.row);
                orders.push(responseTreated);
            });
            
            send.sendAllOrders(orders);
            break;
    }
}

module.exports = {
    callComandBd: callComandBd
}