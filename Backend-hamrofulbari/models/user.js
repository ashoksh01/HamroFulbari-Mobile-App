const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const validator = require('mongoose-unique-validator'); 
const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    contactnum:{
        type: String,
        required: true
    },
    address: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    superadmin: {
        type: Boolean,
        default: false
    },

});

userSchema.plugin(validator);
const User  = mongoose.model('user', userSchema);
module.exports = User;