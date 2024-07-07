const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_database', 'root', 'root', {
  host: 'localhost',
  port: 3360,
  dialect: 'mariadb' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
 
sequelize.authenticate().then( () => {
  console.log('Connection has been established successfully.');
}).catch ((error) => {
  console.error('Unable to connect to the database:', error);  
});

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;