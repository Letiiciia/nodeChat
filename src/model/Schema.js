const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    permalink: {
        type: String,
        required: false
    }
},

{collection: 'chatTrilogo'}

)

const ChatTrilogo = mongoose.model('ChatTrilogo', ticketSchema);

module.exports = ChatTrilogo;