const router = require("express").Router();
const passport = require("../../utility/passport/passport");
const { createProfileHandler, getProfileHandler } = require("../controller");
const { createProfileChecks } = require("../checks");

router.post(
	"/create",
	createProfileChecks,
	passport.authenticate("jwt", {
		session: false,
		failureRedirect: "/api/failurejson"
	}),
	createProfileHandler
);

router.get(
	"/",
	passport.authenticate("jwt", {
		session: false,
		failureRedirect: "/api/failurejson"
	}),
	getProfileHandler
);

module.exports = router;
