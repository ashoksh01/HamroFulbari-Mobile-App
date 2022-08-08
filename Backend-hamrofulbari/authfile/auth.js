const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports.verifyUser = (req, res, next) => {
    let authHeader = req.headers.authorization;
    if (!authHeader) {
        let err = new Error("Bearer token is not set!");
        err.status = 401;
        return next(err);
    }
    let token = authHeader.split(' ')[1];
    let data;
    try {
        data = jwt.verify(token, process.env.SECRET);
    } catch (err) {
        throw new Error('Token could not be verified!');
    }
   
    User.findById(data.id)
        .then((user) => {
            req.user = user;
            next();
        })
}

module.exports.verifyAdmin = (req, res, next) => {
    if (!req.user) {
        let err = new Error('Unauthorized!');
        err.status = 401;
        return next(err);
    } else if (req.user.admin !== true) {
        let err = new Error('You are not admin!');
        err.status = 403;
        res.status(403).json({message:"You are not admin"});
        return next(err);
    }
    next();
}