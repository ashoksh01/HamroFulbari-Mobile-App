const express = require('express');
const userrequest = require('../models/userrequest');
const router = new express.Router;
const bcrypt = require('bcrypt');
const app = express();
const auth = require('../authfile/auth');

//user Request Add
router.post("/request",auth.verifyUser,(req, res) => {
    console.log(req.body);
    userrequest.create(req.body).then(function(){
        return res.json({successmsg :"Request Submitted. We will update you soon. Thank you!"});
    }).catch(function(e){
        if(e.name === "ValidationError"){
            return res.status(403).json({errmsg: "Validation error."});
        }else{
            res.send(e);
        }
    });
});


//request as per user id
router.get('/user/request/:id',auth.verifyUser,(req,res)=>{
    userrequest.find({userID:req.params.id}).then(function(req){
         res.json(req);
    }).catch(function(e){
            res.json(e);
    });
});


//admin views all request
router.get('/request',auth.verifyUser, auth.verifyAdmin,(req,res)=>{
    userrequest.find().then(function(req){
         res.json(req);
    }).catch(function(e){
            res.json(e);
    });
});

//find request as per request id
router.get('/request/:id',auth.verifyUser,(req,res)=>{
    console.log(req.params.id);
    userrequest.findOne({_id:req.params.id}).then(function(req){
         res.json(req);
    }).catch(function(e){
            res.json(e);
    });
});

//updated by user
router.put('/request/:id',auth.verifyUser,(req,res)=>{
    console.log(req.body);
    userrequest.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
         res.status(200).json({successmsg:"Request Updated."});
    }).catch(function(e){
         res.send(e)
    });
});

//updated by admin
router.put('/admin/request/:id',auth.verifyUser,auth.verifyAdmin,(req,res)=>{
    userrequest.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
         console.log(res.body);
         res.status(200).json({successmsg:"Response Sent"});
    }).catch(function(e){
         res.send(e)
    });
});


//delete a request
router.delete('/request/:id',auth.verifyUser,(req,res)=>{
    userrequest.findByIdAndDelete(req.params.id).then(function(){
          res.status(200).json({successmsg:"Your request has been canceled"});
        }).catch(function(e){
            res.status(402).json({errmsg:"Request could not be canceled."});
        });
});

module.exports = router;