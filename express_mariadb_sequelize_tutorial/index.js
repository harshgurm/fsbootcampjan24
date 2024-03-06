const { Sequelize, sequelize } = require('./config.js');



const Department = require('./models/department');
const Employee = require('./models/employee');

sequelize.sync().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});