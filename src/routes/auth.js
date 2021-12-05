const router = require("express").Router();
const { signUpHandler, signInHandler } = require("../controller");
const {signInChecks,signUpChecks} = require("../checks")
router.post(
	"/signup",
	signUpChecks,
	signUpHandler
);

router.post(
	"/signin",
	signInChecks,
	signInHandler
);

module.exports = router;
