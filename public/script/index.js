var socket = io('http://localhost:3000');

// document.getElementById("ticket_id").value = "ticket_id: 60232ace18f92c27146cd11a";
// console.log(document.getElementById("ticket_id").value);

function renderMessage(message) {
    $('.messages').append('<div class="message"><strong>' + message.author + '</strong>:' + message.message + '</div>');
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

    var author = $('input[name=username]').val();
    var message = $('input[name=message]').val();

    if (author.length && message.length) {
        var messageObject = {
            author: author,
            message: message,
        };

        renderMessage(messageObject);

        socket.emit('sendMessage', messageObject);
        
    }
})