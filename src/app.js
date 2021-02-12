//config chat
const express = require('express');
const path = require('path');
const app = express();

const database = require('../src/model/connect');

const router = require('../src/routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

//conexão mongodb
database.connect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config front chat
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', path.join(__dirname, '../public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//rota principal api
app.use('/api', router);

//rota chat
app.use('/', (req, resp) => {
    resp.render('index.html');
})

module.exports = app;