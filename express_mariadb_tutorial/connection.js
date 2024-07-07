const mariadb = require('mariadb');
require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

// const pool = mariadb.createPool({
//     host: 'dpg-copbmo8l6cac73ajqm50-a', 
//     user: 'database_example_5tf7_user',
//     password: 'zVZlAS7cqmZW2a74kuFW7G37QxZKpThf',
//     database: 'database_example_5tf7',
//     port: 5432
// });

module.exports = pool;