const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    ticket_id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
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