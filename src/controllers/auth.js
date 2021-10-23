const {User} = require("../models");
const logger = require("../../utility/logger/logger")
const {validationResult } = require("express-validator");
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const {SECRET} = require("../../config/secret")
exports.signUpHandler = (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: errors.array()[0].msg,
        });
    }
    let {email,plainPassword} = req.body;
    logger.info(`signup route used by ${email}`)
    User.findOne({email}).exec((err,user)=>{
        if(user){
            logger.error(`signup route used by ${email}: email already exist`)
            return res.status(400).json({
                msg: 'User with this email already exist!',
            })
        } else {
            bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
                email.toLowerCase();
                const user = new User({
                    email,
                    encryptedPassword: hash
                })
                user.save((err,user) => {
                    if(err  || !user){
                        logger.error(`signup route used by ${email}: Failed to save user`)
                        return res.status(400).json({
                            msg: 'Failed to save user',
                        })
                    } else {
                        logger.info(`signup route used by ${email}: successfull`)
                        res.status(200).json({
                            msg: "User Created Successfully"
                        });
                    }
                })
            })
        }
    })
}

exports.signInHandler = (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            msg: errors.array()[0].msg,
        });
    }
    let {email,plainPassword} = req.body;
    email.toLowerCase();
    User.findOne({email}).exec((err,user)=>{
        if(err || !user){
            if(!user) {
                console.log("some error occured")
            }
            if(err){
                console.log(err)
            }
            return res.status(400).json({
                msg: 'User with this email does not exist',
            })
        } else {
            bcrypt.compare(plainPassword, user.encryptedPassword, function(err, result) {
                if(result != true){
                    return res.status(400).json({
                        msg: 'Please Enter correct Password',
                    });
                }else{
                    const payload = {
                        id: user.id,
                        email: user.email,
                    }
                    jwt.sign(payload,
                        SECRET,
                        (err,token) => {
                            user.__v = undefined;
                            user.encryptedPassword = undefined;
                            user.createdAt = undefined;
                            user.updatedAt = undefined;
                            return res.status(200).json({
                                token: 'Bearer '+ token,
                                user,
                                msg: 'User successfully loggedin!'
                            });
                        });
                }
            });
        }
    })
}