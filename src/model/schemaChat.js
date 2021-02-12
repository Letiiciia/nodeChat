const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    permalink: {
        type: String,
        required: true
    }
},

{collection: 'chatTrilogo'}

)

const chatTrilogo = mongoose.model('chatTrilogo', ticketSchema);

module.exports = chatTrilogo;