module.exports = () => {
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const BearerStrategy = require('passport-http-bearer').Strategy;
    const jwt = require('jsonwebtoken');

    passport.use(
        new LocalStrategy({
            usernameField:'email',
            passwordField:'password',
            session: false
        }, (email, password, done) => {
            //autenticar usuario
            done(null, {})
        })
    );
    
    passport.user(
        new BearerStrategy((token, done) => {
            try {
                const payload = jwt.verify(token, 'senha-secreta');
                console.log(payload);
                const usuario = {};
                done(null, usuario, {token:token})
            } catch (error) {
                done(error)
            }
            
        })
    )
}
