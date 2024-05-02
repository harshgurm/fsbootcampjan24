const mariadb = require('mariadb');

// const pool = mariadb.createPool({
//     host: 'localhost', 
//     user: 'root',
//     password: 'root',
//     database: 'robogarden',
//     port: 3360
// });

const pool = mariadb.createPool({
    host: 'dpg-copbmo8l6cac73ajqm50-a', 
    user: 'database_example_5tf7_user',
    password: 'zVZlAS7cqmZW2a74kuFW7G37QxZKpThf',
    database: 'database_example_5tf7',
    port: 5432
});

module.exports = pool;