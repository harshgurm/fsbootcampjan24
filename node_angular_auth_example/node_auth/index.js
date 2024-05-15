const pool = require('./connection');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

app.post('/register/', async (request, response) => {
    const { username, password, confirm_password } = request.body;
    //or 
    // const username = request.body.username;
    // const  password = request.body.password;
    // const confirm_password = request.body.confirm_password;

    if(!username || !password || !confirm_password) return response.status(500).json('All fields are required');

    if(password != confirm_password) return response.status(500).json(`Password doesn't match with confirm password`);

    const connection = await pool.getConnection();
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        const result = await connection.query(`INSERT INTO robo_project_auth.users (username, password)
                                        VALUES (?, ?)`, [username, hashedPassword]);

        console.log('HG here', result);
        return response.status(200).json(`Rows inserted ${result.affectedRows}`);
        
    } catch(error){
        return response.status(500).json(error);
    }

})

app.post('/login/', async (request, response) => {
  
    const { username, password } = request.body;    

    if(!username || !password) return response.status(500).json('All fields are required');

    const connection = await pool.getConnection();

    try {
        const user = await connection.query(`SELECT username, password 
                                         FROM robo_project_auth.users
                                         WHERE username = ?`, username);

        if(user.length === 0){
            return response.status(401).json('User not found');
        }
        
        const matchPassword = bcrypt.compare(password, user[0].password);
        
        if(!matchPassword){
            return response.status(401).json('Invalid creds');
        }

        return response.status(200).json(`This is valid user`);

    } catch (errors) {

    }

})

app.listen(3000, () => {
    console.log('Application is running');
})