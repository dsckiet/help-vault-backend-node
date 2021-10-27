const { signUpHandler, signInHandler} = require("./controllers/auth");
const {createProfileHandler,getProfileHandler} = require("./controllers/profile")
module.exports = {
	signUpHandler,
	signInHandler,
	createProfileHandler,
	getProfileHandler
};
