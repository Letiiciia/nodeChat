const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true,
        select: false
    }
},

{collection: "loginTrilogo"}

)

const loginTrilogo = mongoose.model('loginTrilogo', authorSchema);

module.exports = loginTrilogo;