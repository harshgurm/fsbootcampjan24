const { sequelize, Sequelize } = require('../connection');


const Customer = sequelize.define("customer", {
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
    email: {
      type: Sequelize.STRING,
    }
 });

 module.exports = Customer;