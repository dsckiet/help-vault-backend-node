const { signUpHandler, signInHandler } = require("./controllers/auth");
const {
	createProfileHandler,
	getProfileHandler
} = require("./controllers/profile");
const {addJobHandler,getJobsHandler} = require("./controllers/jobs")
module.exports = {
	signUpHandler,
	signInHandler,
	createProfileHandler,
	getProfileHandler,
	addJobHandler,
	getJobsHandler
};
