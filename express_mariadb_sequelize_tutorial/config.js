const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sequelize_tutorial', 'root', 'root', {
    host: 'localhost',
    port: 3360,
    dialect: 'mariadb'
});

sequelize.authenticate().then(() => {
    console.log('Connection successful');
}).catch((error) => {
    console.log(error);
});

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;