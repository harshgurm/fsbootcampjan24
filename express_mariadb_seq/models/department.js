const { sequelize, Sequelize } = require('../connection');


const Department = sequelize.define("department", {
    ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    DepartmentName: {
      type: Sequelize.STRING,
      allowNull: false
    }
 });

 module.exports = Department;