const { signUpHandler, signInHandler} = require("./controllers/auth");
const {createProfileHandler} = require("./controllers/profile")
module.exports = {
	signUpHandler,
	signInHandler,
	createProfileHandler
};
