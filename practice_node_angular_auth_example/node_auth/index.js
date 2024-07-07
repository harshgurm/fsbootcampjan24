const pool = require('./connection');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('./middleware/auth');
const app = express();

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.use(cors());

app.use(express.json());


// Protected route
 app.get('/', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed' });
 });

app.post('/register/', async (request, response) => {
    console.log('Request Came', request);
    const connection = await pool.getConnection();
    
    const { username, password, confirm_password } = request.body;
    
    if(!username || !password || !confirm_password) return response.status(500).send('All fields are required');

    if(password != confirm_password) return response.status(500).send('Password does not match with Confirm Password');
    
    //TODO:
    // encrypt the pasasword before inserting
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const result = await connection.query(`
        INSERT INTO robo_project_auth.users (username, password)
        VALUES( ?, ?)`, [username, hashedPassword]);
        return response.status(200).json(`Rows instered ${result.affectedRows}`);        
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
    
});

app.post('/login/', async (request, response) => {
    const connection = await pool.getConnection();
    
    const { username, password } = request.body;
    
    if(!username || !password) return response.status(500).send('All fields are required');

    try {
        const user = await connection.query(`
        SELECT user_id, username, password
        FROM robo_project_auth.users
        WHERE username = ?`, username);
        if (!user) {
            return response.status(401).json({ error: 'Authentication failed' });
        } else {
            const passwordMatch = await bcrypt.compare(password, user[0].password);
          
            if (!passwordMatch) {
                return response.status(401).json({ error: 'Authentication failed' });
            }
            const token = jwt.sign({ user_id: user[0].user_id }, 'thisismysecretkey', {
                expiresIn: '1h',
                });
            return response.status(200).json(token);
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json(error);
    }
    
});

app.listen(3000, () => {
    console.log('Application is running');
})