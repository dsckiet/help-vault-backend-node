const router = require("express").Router();
const logger = require("../utility/logger/logger");
const status = require("../utility/statusCodes");
const { NOT_AUTHORIZED } = require("../utility/statusCodes");
router.use("/auth", require("./routes/auth"));
router.use("/profile", require("./routes/profile"));
router.use("/job", require("./routes/jobs"));

router.get("/failurejson", function (req, res) {
	res.status(NOT_AUTHORIZED).json({
		msg: "Authentication Failed Login Again"
	});
});

router.get("/", (req, res) => {
	logger.info("Get request at home route");
	return res.status(status.OK).json({
		msg: "Welcome to the home route!"
	});
});

module.exports = router;
