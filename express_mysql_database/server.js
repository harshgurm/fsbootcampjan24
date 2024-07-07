const express = require('express');
const app = express();
const connection = require('./connection.js');

app.use(express.json());

app.get('/customers/', async (request, response) => {
    try {
        const data = await connection.promise().query(
          `SELECT *  from robogarden.customers;`
        );
        response.status(202).json({
          users: data[0],
        });
      } catch (err) {

        response.status(500).send(err);
      }
});

app.get('/customers', (request, response) => {
  connection.query('SELECT * FROM robogarden.customers', (error, data) => {
    if (error) {
      console.error(error);
      response.status(500).send('Error retrieving users');
    } else {
      response.send(data);
    }
  });
});

//grab a particular customer

app.get('/customers/:id', (request, response) => {

        const data = connection.query(
          `SELECT *  from om.customers WHERE customer_id = ?`, request.params.id, (err, data) => {
            if(err) response.status(500).send(err);
            response.status(200).send(data);
          }
        );
});

app.post('/customers', (request, response) => {
    
    const { first_name, last_name } = request.body;
    //validate if the customer has a name
    if(!first_name || !last_name) response.status(404).send('Please provide a customer first and last name');

    const data = connection.query(
        `INSERT INTO ex.customers (customer_id, customer_first_name, customer_last_name) VALUES (?, ?)`, [first_name, last_name], (err, data) => {
          if(err) response.status(500).send(err);
          response.status(200).send(data);
        }
      );
});

//update request
app.put('/customers/:id', (request, response) => {

    
  const { first_name, last_name } = request.body;
  //validate if the customer has a name
  // if(!first_name || !last_name) response.status(404).send('Please provide a customer first and last name');

  const data = connection.query(
      `UPDATE ex.customers 
       SET customer_first_name = ?, customer_last_name  = ?
       WHERE customer_id = ?`, [first_name, last_name, request.params.id], (err, data) => {
        if(err) response.status(500).send(err);
        response.status(200).send(data);
      }
    );
});

app.delete('/customers/:id', (request, response) => {
    //validate if the customer exist
    const data = connection.query(
        `DELETE  from ex.customers WHERE customer_id = ?`, request.params.id, (err, data) => {
          if(err) return response.status(500).send(err);
          
          if(data.affectedRows == 0) return response.status(200).send("No records found");
          response.status(200).send( data.affectedRows + " records deleted");
        }
      );
})

app.post('/register/', (request, response) => {
    
    //email
    //name
    //password    

    //validate if we have all 3 values
    //use this example and modify it
    // if(!request.body.name) response.status(404).send('Please provide a customer name');


    // use this code as a reference code to add your newly register user to user object
    // var customer = {
    //     id: customers.length + 1,
    //     name: request.body.name
    // }
    // customers.push(customer);

    response.send(user);

});

// app.all('*', (request, response) => {
//     response.send("404 Page not found");
// });

app.listen(3000, () => {
    console.log('Application is running');
})