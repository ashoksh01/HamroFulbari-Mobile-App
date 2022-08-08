const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const validator = require('mongoose-unique-validator'); 
const cartSchema = mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    },
    productname: {
        type: String,
        required: true,
    },
    productprice: {
        type: String,
        required: true
    },
    productcategory: {
        type: String,
        required: true
    },
    productimage: {
        type: String,
        required: true
    },
    productnumber: {
        type: Number,
        required: true
    },
    addedbyName:{
        type: String,
        required: true
    },
    addedbyID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

cartSchema.plugin(validator);
const Cart  = mongoose.model('cart', cartSchema);
module.exports = Cart;