const {Profile,User} = require("../models");
const { validationResult } = require("express-validator");
const {sendSuccess,sendError} = require("../../utility/reponse")
const {BAD_REQUEST,NOT_FOUND} = require("../../utility/statusCodes")
const logger = require("../../utility/logger/logger")
exports.createProfileHandler = (req, res) => {
    const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return sendError(res,errors.array()[0].msg,BAD_REQUEST)
	}
    const {firstName,middleName,lastName,phoneNumber,gender,dateOfBirth,houseNo,locality,district,state,bio} = req.body;
    const profile = new Profile({
        firstName,middleName,lastName,phoneNumber,gender,dateOfBirth,houseNo,locality,district,state,bio
    });
    logger.info("Create profile route accessed by : "+ req.user.email)
    profile.save((err,profile) => {
        if(err || !profile) {
            logger.error("Failed to save profile", err);
            return sendError(res,"Failed to save profile",BAD_REQUEST)
        }
        else {
            User.findOne({email: req.user.email}).exec((err,user) => {
                user.profile = profile._id;
                user.save((err,user) => {
                    if(err || !user) {
                        logger.error("Failed to save profile onto user : ", err)
                        return sendError(res,"Failed to save profile",BAD_REQUEST)
                    }
                    else {
                        return sendSuccess(res,{
                            msg: "Profile added successfully"
                        })
                    }
                })
            })
        }
        
    })
}

exports.getProfileHandler = (req,res) => {
    logger.info("Get profile accessed by : " + req.user.email);
    User.findOne({email: req.user.email}).populate('profile').exec((err,user) => {
        if(err || !user || !user.profile){
            logger.error("Unable to find user profile of user :" + req.user.email);
            return sendError(res,"Unable to found user profile",NOT_FOUND);
        }
        return sendSuccess(res,user.profile)
    })
}