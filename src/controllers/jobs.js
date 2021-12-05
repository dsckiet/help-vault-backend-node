const {Job} = require("../models")
const { BAD_REQUEST } = require("../../utility/statusCodes");
const { sendSuccess, sendError } = require("../../utility/reponse");
const logger = require("../../utility/logger/logger");
exports.addJobHandler = (req,res) => {

    const {title,description,volunteerRequired,lat,long,date} = req.body;
    let job = new Job({
        title,
        description,
        volunteerRequired,
        date,
        location: {
            type: 'Point',
            coordinates: [long,lat]
        }
    })
    try{
        job.save();
        return sendSuccess(res, {
            msg: 'Job Created Successfully'
        })
    } catch (err) {
        logger.warn(`${err}`)
        return sendError(
            res,
            "Failed to save user",
            BAD_REQUEST
        );
    }
}