const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.USERNAME_BD,
    password: process.env.PASSWORD_BD,
    host: process.env.HOST_BD,
    port: process.env.PORT_BD,
    database: process.env.DATABASE
})

module.exports = {
    client:client
}