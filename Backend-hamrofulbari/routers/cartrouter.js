const express = require('express');
const cart = require('../models/usercart');
const router = new express.Router;
const app = express();
const path = require("path");
var fs = require("fs");
const auth = require('../authfile/auth');

//cart add
router.post("/carts",auth.verifyUser,(req, res) => {
      console.log(req.body);
        cart.create(req.body).then(function(){
            return res.json({successmsg :"Product added to cart"});
        }).catch(function(e){
            if(e.name === "ValidationError"){
                return res.status(403).json({errmsg: "Validation Error Occured."});
            }else{
                return res.status(402).json({errmsg:"Something Went Wrong. Try again!"});
            }
        });
});

//cartdisplay
router.get('/carts/:id',auth.verifyUser,(req,res)=>{
    cart.find({addedbyID:req.params.id}).then(function(carts){
         res.json(carts);
    }).catch(function(e){
            res.json(e);
    });
});


//cart update
router.put('/carts/:id',auth.verifyUser,(req,res)=>{
    console.log(req.body);
    cart.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
         res.status(200).json({successmsg:"Cart updated"});
    }).catch(function(e){
         res.send(e)
    });
});
//cartdelete
router.delete('/carts/:id',auth.verifyUser,(req,res)=>{
    cart.findByIdAndDelete(req.params.id).then(function(){
          res.status(200).json({successmsg:"Product Removed from Cart"});
        }).catch(function(e){
            res.status(402).json({errmsg:"Product Removal failed."});
        });
});

//android delete all on shake
router.delete('/empty/carts/:addedbyID',auth.verifyUser,(req,res)=>{
    cart.deleteMany({addedbyID:req.params.addedbyID}).then(function(){
          res.status(200).json({successmsg:"All cart items removed"});
        }).catch(function(e){
            res.status(402).json({errmsg:"Products could not be removed"});
    });
});


module.exports = router;