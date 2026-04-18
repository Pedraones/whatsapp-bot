const client = require('./instance-bd');

async function getWithoutParameters(){
    await client.client.connect();
    const result = await client.client.query('SELECT * FROM pedidos')
    console.log(result);
    await client.client.end();
}

module.exports = {
    getWithoutParameters:getWithoutParameters
}