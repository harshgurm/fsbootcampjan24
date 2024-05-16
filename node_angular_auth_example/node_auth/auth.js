const jwt = require('jsonwebtoken');

function verifyUser(request, response, next){
    
    const token = request.header('Authorization');    
    if(!token) return response.status(401).json('Unauthorized User');

    try {
        const decoded_token = jwt.verify(token, 'thisismyencryptionkey');
        console.log(decoded_token);
        next();
    } catch (error) {
        return response.status(401).json(error);
    }
    
}

module.exports = verifyUser;