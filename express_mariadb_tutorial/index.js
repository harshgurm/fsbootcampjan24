const pool = require('./connection');
const express = require('express');

const app = express();

app.use(express.json());

//get all the employees
app.get('/employees/', async (request, response) => {
    //get the connection
    const connection = await pool.getConnection();
    try {
        // return the query result
        const result = await connection.query('SELECT * FROM robogarden.employees');
        response.status(200).json({
            employees: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }

});

//get employees based on their id
app.get('/employees/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    try {
        const result = await connection.query(`
        SELECT * 
        FROM robogarden.employees
        WHERE employee_id = ?`, id);
        response.status(200).json({
            employees: result,
        });
    } catch (error) {
        response.send(500).send(error);
    }

});

app.post('/employees/', async (request, response) => {
    const connection = await pool.getConnection();
    // const name = request.body.name;
    // const department_id = request.body.department_id;
    const { name, department_id} = request.body;

    if(!name || !department_id) return response.status(500).send('Please provide both name and department_id');
    
    try {
        const result = await connection.query(`
        INSERT INTO robogarden.employees (name, department_id)
        VALUES( ?, ?)`, [name, department_id]);
        response.status(200).json();
    } catch (error) {
        console.log(error);
        response.send(500).send(error);
    }
    
});

//To Do Insert departments

app.listen(3000, () => {
    console.log('Application is running');
})