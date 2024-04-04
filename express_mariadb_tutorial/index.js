const pool = require('./connection');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(cors());

// app.use(cors({origin: 'http://localhost:4200/'}));

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
        return response.status(200).send(`Rows instered ${result.affectedRows}`);        
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
    
});

//Update Employees
app.put('/employees/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;
    const name = request.body.name;
    
    if(!name) return response.status(500).send('Please provide a name to update');

    try{
        const result = await connection.query(`
        UPDATE robogarden.employees
        SET name = ?
        WHERE employee_id = ?`, [name, id]);
        return response.status(200).send(`Number of rows updated = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});

//DELETE Request
app.delete('/employees/:id', async (request, response) => {
    const connection = await pool.getConnection();
    const id = request.params.id;    
    
    try{
        const result = await connection.query(`
        DELETE FROM robogarden.employees
        WHERE employee_id = ?`, id);
        return response.status(200).send(`Number of records deleted = ${result.affectedRows}`);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error.toString());
    }

});


//To Do 
// We will check this on Monday
// API request to insert departments
// API request to update departments
// API request to return all departments
// API request to return a department based on id
// API request to delete a department based on id


app.listen(3000, () => {
    console.log('Application is running');
})