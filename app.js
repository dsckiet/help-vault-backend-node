const express = require("express");
const logger = require("./utility/logger/logger")
const status = require("./utility/statusCodes")
const app = express();
require("./config/dbConnection");

app.use(express.json()); 
app.use(express.urlencoded());
app.use("/api",require("./src/routes"))

app.get("/", (req, res) => {
	logger.info("Get request at home route")
	return res.status(status.OK).json({
		msg: "Welcome to the home route!"
	});
});

module.exports = app;
