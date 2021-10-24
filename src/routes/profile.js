const router = require("express").Router();
const passport = require("../../utility/passport/passport");
const logger = require("../../utility/logger/logger")
const {createProfileHandler} = require("../controller")
router.post(
	"/create",
	passport.authenticate("jwt", {
		session: false,
		failureRedirect: "/api/failurejson"
	}),
	createProfileHandler
);

module.exports = router;
