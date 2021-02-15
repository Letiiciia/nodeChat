const jwt = require('jsonwebtoken');

const createToken = () => {
    payload = {};
    return jwt.sign(payload, 'senha-secreta');
    
}

const login = (request, response) => {
    const token = createToken();
    response.set('Authorization', token);
    response.status(200).send();
}

module.exports = {
    login
}