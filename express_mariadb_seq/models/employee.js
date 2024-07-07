const { sequelize, Sequelize } = require('../connection');


const Employee = sequelize.define("employee", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salary: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
 });

 module.exports = Employee;