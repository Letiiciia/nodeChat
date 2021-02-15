//config chat
const express = require('express');
const path = require('path');
const app = express();
const database = require('../src/model/connect');
const router = require('./routes/routesChat');
const routerLogin = require('./routes/routesAuthor');
const routerUser = require('./routes/routesUser');
const cors = require('cors');
const bodyParser = require('body-parser');

//connection mongodb
database.connect();

//esurance and config to json
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config front chat
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//main route api
app.use('/api', router);

//login route
app.use('/login', routerLogin);

//authentication route
app.use('/auth', routerUser);

//chat route
app.use('/', (req, resp) => {
    resp.render('index.html');
})

module.exports = app;