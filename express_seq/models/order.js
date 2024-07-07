const { sequelize, Sequelize } = require('../connection');


const Order = sequelize.define("order", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    total: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
 });

 module.exports = Order;