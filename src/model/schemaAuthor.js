const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}

)

const loginTrilogo = mongoose.model('loginTrilogo', authorSchema);

module.exports = loginTrilogo;