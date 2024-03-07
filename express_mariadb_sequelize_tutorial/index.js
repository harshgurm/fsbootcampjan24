const express = require('express');
const app = express();

app.use(express.json());

const { Sequelize, sequelize } = require('./config.js');
const department_router = require('./router/department.js');
const employee_router = require('./router/employee.js');

//model files
const Department = require('./models/department');
const Employee = require('./models/employee');

//router files
app.use('/departments/', department_router);
app.use('/employees/', employee_router);

Department.hasMany(Employee, 
    { foreignKey: { allowNull: false }, onDelete: 'CASCADE'});
Employee.belongsTo(Department);

// sequelize.sync({force: true})
sequelize.sync().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

app.listen(3000, () => {
    console.log('Application is running');
});

