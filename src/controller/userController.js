const jwt = require('jsonwebtoken');

const createToken = () => {
    payload = {
        id: 'usuario.id'
    };
    return jwt.sign(payload, 'senha-secreta');
    
}

const login = (request, response) => {
    const token = createToken();
    response.set('Authorization', token);
    response.status(204).send();
}

module.exports = {
    login
}