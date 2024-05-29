const pool = require('./connection');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyUser = require('./auth');
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get('/', verifyUser, (request, response) => {
    response.status(200).json('Welcome!!!');
})

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

    //missing the check to make sure the username is unique
    
    try {
        const result = await connection.query(`INSERT INTO robo_project_auth.users (username, password)
                                        VALUES (?, ?)`, [username, hashedPassword]);
        
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
        const user = await connection.query(`SELECT user_id, username, password 
                                         FROM robo_project_auth.users
                                         WHERE username = ?`, username);

        if(user.length === 0){
            return response.status(401).json('User not found');
        }
        
        const matchPassword = await bcrypt.compare(password, user[0].password);

        if(!matchPassword){
            return response.status(401).json('Invalid creds');
        }

        const token = jwt.sign({ user_id: user[0].user_id }, 'thisismyencryptionkey', {
            expiresIn: '1h',
        });

        return response.status(200).json(token);

    } catch (errors) {

    }

})

app.listen(3000, () => {
    console.log('Application is running');
})