const {User} = require("../models");
const logger = require("../../utility/logger/logger")
const { check, validationResult } = require("express-validator");
var bcrypt = require('bcryptjs');
const saltRounds = 10;
exports.signUpHandler = (req,res) => {
    let {email,plainPassword} = req.body;
    console.log(req.body);
    logger.info(`signup route used by ${email}`)
    User.findOne({email}).exec((err,user)=>{
        if(user){
            logger.error(`signup route used by ${email}: email already exist`)
            return res.status(400).json({
                status: 400,
                msg: 'User with this email already exist!',
                error: 'User with this email already exist!',
                resCode: '109'
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