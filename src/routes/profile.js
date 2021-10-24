const router = require("express").Router();

const passport = require("../../utility/passport/passport");
router.get(
	"/create",
	passport.authenticate("jwt", {
		session: false,
		failureRedirect: "/api/failurejson"
	}),
	(req, res) => {
		
		return res.status(200).json({
			msg: "Private route accessed"
		});
	}
);

module.exports = router;
