const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const database = require('./src/model/connect');

const router = require('./src/routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

//conexão mongodb
database.connect();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//front
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/api', router);
app.use('/', (req, resp) => {
    resp.render('index.html');
})

//socket.io recebimento do front
let messages = []; //estrutura de bancodedados

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.emit('previousMessage', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        socket.broadcast.emit('receivedMessage', data);
        console.log(messages);
    });
});

server.listen(3000);
