const { Sequelize, sequelize } = require('../config');

const Employee = sequelize.define("employee", {
    ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Salary: {
        type: Sequelize.FLOAT,
        allowNull: false,
    }
});

module.exports = Employee;