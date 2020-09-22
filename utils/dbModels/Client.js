const mongoose = require('mongoose');
//import ClanSchema from './Clan.js'
const ClientSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email'],
        validate: {
            validator: function (value) {
                // check for correct email format
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)
            },
            message: `Ingresa un correo valido!`
        }
    },
    message: {
        type: String,
        required: [true, 'Please add a message'],
        
    },
    created: {
        type: Date,
        default: Date.now()
    }
})



export default (mongoose.models && mongoose.models.ClientSchema
    ? mongoose.models.ClientSchema
    : mongoose.model('ClientSchema', ClientSchema));