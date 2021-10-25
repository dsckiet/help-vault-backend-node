const {Profile,User} = require("../models");
exports.createProfileHandler = (req, res) => {
    const {firstName,middleName,lastName,phoneNumber,gender,dateOfBirth,houseNo,locality,district,state,bio} = req.body;
    const profile = new Profile({
        firstName,middleName,lastName,phoneNumber,gender,dateOfBirth,houseNo,locality,district,state,bio
    });
    profile.save((err,profile) => {
        if(err || !profile) {
            logger.error("Failed to save profile", err);
        }
        else {
            User.findOne({email: req.user.email}).exec((err,user) => {
                user.profile = profile._id;
                user.save((err,user) => {
                    if(err || !user) {
                        logger.error("Failed to save profile onto user : ", err)
                    }
                    else {
                        return res.status(200).json({
                            msg: "Profile added successfully"
                        });
                    }
                })
            })
        }
        
    })
}