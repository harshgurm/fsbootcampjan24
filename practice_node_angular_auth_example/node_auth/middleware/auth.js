const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });
    console.log('token ==', token)
    try {
        const decoded = jwt.verify(token, 'thisismysecretkey');
        console.log('decoded == ',decoded);
        req.user_id = decoded.user_id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
 };

module.exports = verifyToken;