const { Pool } = require('pg');
require('dotenv').config();

function initPool(){
    try{
        const pool = new Pool({
            user: process.env.USERNAME_BD,
            password: process.env.PASSWORD_BD,
            host: process.env.HOST_BD,
            port: process.env.PORT_BD,
            database: process.env.DATABASE
        });    
        return pool;
    }
    catch(error){
        pool = undefined;
        return pool;
    }
}

module.exports = {
    initPool: initPool
}