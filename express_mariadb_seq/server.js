const express = require('express');
const app = express();
const { sequelize } = require('./connection.js');

const Employee = require('./models/employee.js');
const Department = require('./models/department.js');

const departments_router = require('./router/department');
const employees_router = require('./router/employee');

app.use(express.json());

app.use('/departments/', departments_router);
app.use('/employees/', employees_router);

Department.hasMany(Employee,
  {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
Employee.belongsTo(Department);


// sequelize.sync({ force: true }).then(
  sequelize.sync().then(
  (response) => {
    // console.log(response);
  }
).catch((error) => {
  console.log(error);
});

app.listen(3000, () => {
  console.log('Application is running');
});