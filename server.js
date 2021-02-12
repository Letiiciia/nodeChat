const app = require('./src/app.js');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const chatTrilogo = require('./src/model/schemaChat');


let messages = [];

let newContent = null;

io.on('connection', socket => {
    console.log(`Socket conectado: ${socket.id}`);

    socket.emit('previousMessages', messages);

    socket.on('sendMessage', data => {
        messages.push(data);
        newContent = new chatTrilogo(data);

        newContent.save();

        socket.broadcast.emit('receivedMessage', data);
        
        
    });
});


server.listen(3000);
