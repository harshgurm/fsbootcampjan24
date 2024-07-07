const express = require('express');
const app = express();
const pool  = require('./connection.js');

app.use(express.json());


app.get('/employees/', async (request, response) => {
  const connection = await pool.getConnection();
    try {        
        const data = await connection.query(
          `SELECT *  from robogarden.employees;`
        );
        response.status(202).json({
           users: data,
        });
      } catch (err) {        
        response.status(500).send(err);
      }
});

//grab a particular customer

app.get('/employees/:id', async (request, response) => {

  const connection = await pool.getConnection();
  const id = request.params.id;

  try {
    const data = await connection.query(
      `SELECT *  from employees WHERE employee_id = ?`, id
    )
    
    response.status(202).json({
      users: data,
   });
  } catch (error) {
    response.status(500).send(error);
  }finally {
      // Close connection
    if (connection) await connection.close();
  }
});

app.post('/employees/', async (request, response) => {
    
    const { name, department_id } = request.body;
    const connection = await pool.getConnection();

    //validate if the customer has a name
    // if(!name || !department_id) response.status(404).send('Please provide a name and department id');

    try {
      const data = await connection.query(
        `INSERT INTO employees ( name, department_id) VALUES (?, ?)`, [name, department_id]
      );
      // fix the response here 
      response.status(202).send(data);
     
    }  catch (error) {
      response.status(500).send(error);
    }finally {
        // Close connection
      if (connection) await connection.close();
    }

});

//update request
app.put('/employees/:id', async (request, response) => {
  
  const connection = await pool.getConnection();
  const { name, department_id } = request.body;
  const id = request.params.id;
    //validate if the customer has a name
    // if(!name || !department_id) response.status(404).send('Please provide a name and department id');

    try {
      const data = await connection.query(
        `UPDATE employees 
         SET name = ?, department_id = ?
         WHERE employee_id = ?`, [name, department_id, id]
      );
        console.log(data);
      response.status(202).json(`Record updated: ${data.affectedRows} rows affected`);
    }   catch (error) {
      response.status(500).send(error);
    }finally {
        // Close connection
      if (connection) await connection.close();
    }

});

app.delete('/employees/:id', async (request, response) => {
  
  const connection = await pool.getConnection();
  const id = request.params.id;

  try {
    //validate if the customer exist
    const data = await connection.query(
      `DELETE  from employees WHERE employee_id = ?`, id
    );
    console.log(`Record deleted: ${data.affectedRows} rows affected`)
    response.send(`Record deleted: ${data.affectedRows} rows affected`);
  } catch (error) {
      response.status(500).send(error);
    }
});


app.listen(3000, () => {
    console.log('Application is running');
});