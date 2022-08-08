const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken'); 
const uerrequestSchema = mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    productprice: {
        type: String,
    },
    productquantity: {
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    adminresponse:{
        type: Boolean,
        default: false
    },
    admincomment:{
        type: String
    },
    extracomment: {
        type: String,
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});


const Userrequest  = mongoose.model('userrequest', uerrequestSchema);
module.exports = Userrequest;