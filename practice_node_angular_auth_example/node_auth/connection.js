const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'robo_project_auth',
    port: 3360
});

module.exports = pool;