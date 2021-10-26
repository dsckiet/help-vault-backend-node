const { User } = require("../models");
const logger = require("../../utility/logger/logger");
const { validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { SECRET } = require("../../config/secret");
const {sendSuccess,sendError} = require("../../utility/reponse")
const {BAD_REQUEST} = require("../../utility/statusCodes")
exports.signUpHandler = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return sendError(res,errors.array()[0].msg,BAD_REQUEST)
	}
	let { email, plainPassword } = req.body;
	logger.info(`signup route used by ${email}`);
	User.findOne({ email }).exec((err, user) => {
		if (user) {
			logger.error(`signup route used by ${email}: email already exist`);
			return sendError(res,"User with this email already exist!",BAD_REQUEST)
		} else {
			bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
				email.toLowerCase();
				const user = new User({
					email,
					encryptedPassword: hash
				});
				user.save((err, user) => {
					if (err || !user) {
						logger.error(
							`signup route used by ${email}: Failed to save user`
						);
						return sendError(res,"Failed to save user",BAD_REQUEST)
					} else {
						logger.info(
							`signup route used by ${email}: successfull`
						);
						return sendSuccess(res,{
							msg: "User Created Successfully"
						});
					}
				});
			});
		}
	});
};

exports.signInHandler = (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return sendError(res,errors.array()[0].msg,BAD_REQUEST)
	}
	let { email, plainPassword } = req.body;
	email.toLowerCase();
	logger.info("Sigin In route accessed by : ", email);
	User.findOne({ email }).exec((err, user) => {
		if (err || !user) {
			if (!user) {
				logger.error("User not found! : ",email);
			}
			if (err) {
				logger.error("Some error occured : ", error);
				
			}
			return sendError(res,"User not found!",BAD_REQUEST)
		} else {
			bcrypt.compare(
				plainPassword,
				user.encryptedPassword,
				function (err, result) {
					if (result != true) {
						return sendError(res,"Please Enter correct Password",BAD_REQUEST)
					} else {
						const payload = {
							id: user.id,
							email: user.email
						};
						jwt.sign(payload, SECRET, (err, token) => {
							user.__v = undefined;
							user.encryptedPassword = undefined;
							user.createdAt = undefined;
							user.updatedAt = undefined;
							return sendSuccess(res,{
								token: "Bearer " + token,
								user,
								msg: "User successfully loggedin!"
							})
						});
					}
				}
			);
		}
	});
};
