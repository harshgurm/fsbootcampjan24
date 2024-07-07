const { sequelize } = require('./connection.js');

const Customer = require('./models/customer.js');
const Order = require('./models/order.js');

sequelize.sync().then(
  (response) => {
    console.log(response);
  }
).catch((error) => {
  console.log(error);
});