const express = require('express');
const app = express();

app.use(express.json());

const mysql = require ('mysql2');

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "om",
  });

// const customers = [
//   {id: 1, name: 'Harsh'},
//   {id: 2, name: 'Sam'},
//   {id: 3, name: 'Gurm'}
// ];

// app.get('/', (request, response) => {
//   response.send('Hello Harsh');
// });

app.get('/customers/', async (request, response) => {
    try {
        const data = await connection.promise().query(
          `SELECT *  from customers;`
        );
        response.status(202).json({
          users: data[0],
        });
      } catch (err) {
        response.status(500).json({
          message: err,
        });
      }
});

app.get('/customers/:id', async (request, response) => {
    try {
        const {id} = request.params;
        var customer = await connection.promise().query(
        `SELECT *  from customers where customer_id = ?`, [id]
        );
        console.log(customer);
        response.status(202).json({
            users: customer[0],
          });
        } catch (err) {
            console.log(request);
          response.status(500).json({
            message: err,
          });
        }
  });

//   if(!customer) response.status(404).send('Customer not found');
//   response.send(customer);
// });

// app.post('/customers', (request, response) => {

//   if(!request.body.name){
//     response.send('Please enter a valid Name');
//     return;
//   }


//   var customer = {
//     id : customers.length + 1,
//     name : request.body.name
//   }
//   customers.push(customer);
//   response.send(customers);
// });

// app.put('/customers/:id', (request, response) => {

//   var customer = customers.find( c => c.id == request.params.id);
//   if(!customers){
//     response.status(404).send('Customers not found');
//     return;
//   } 

//   if(!request.body.name){
//     response.send('Please enter a valid Name' + request.body.name);
//     return;
//   }
  
//   customer.name = request.body.name;
//   response.send(customer);
// });

// app.delete('/customers/:id', (request, response) => {

//   var customer = customers.find( c => c.id == request.params.id);
//   if(!customer){
//     return response.status(404).send('Customers not found');    
//   }

//   var index = customers.indexOf(customer);
//   customers.splice(index, 1);
  
//   response.send(customers);
// });

// app.all('*', function(req, res) {
//   throw new Error("Bad request")
// });

app.listen(3000, () => {
  console.log('Listening on port 3000');
});