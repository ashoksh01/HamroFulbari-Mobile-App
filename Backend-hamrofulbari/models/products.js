const mongoose = require('mongoose');

 // const jwt = require('jsonwebtoken');
const validator = require('mongoose-unique-validator'); 
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    loggedinmail:{
        type: String,
        required: true
    }
});

productSchema.plugin(validator);
const Product  = mongoose.model('product', productSchema);
module.exports = Product;