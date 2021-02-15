const { connection } = require("mongoose");


const socket = io('http://localhost:3000');


//document.getElementById("ticket_id").value = "id";
//  console.log(document.getElementById("ticket_id").value);

function renderMessage(message) {
    $('.messages').append('<div class="message"><strong>' + message.username + '</strong>:' + message.message + '</div>');
}

socket.on('previousMessages', function (messages) {
    for (message of messages) {
        renderMessage(message);
    }
})

socket.on('receivedMessage', function (message) {
    renderMessage(message);
})


$('#chat').submit(function (event) {
    event.preventDefault();
    
    var message = $('input[name=message]').val();
    var permalink = $('input[name=permalink]').val();
    var username = $('input[name=username]').val();

    if (message.length && permalink.length && username.length) {

        var messageObject = {
    
            message: message,
            permalink: permalink,
            username: username

        };

        renderMessage(messageObject);

        socket.emit('sendMessage', messageObject);
    }
})

