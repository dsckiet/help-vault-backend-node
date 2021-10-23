const express = require("express");
const {PORT} = require("./config/secret");
const app = express();
require("./config/dbConnection");
module.exports = () => {
	app.listen(PORT, () => {
		console.log(`🚀 Api Running at http://localhost:${PORT}`);
	});

	app.get("/", (req, res) => {
		return res.status(200).json({
			msg: "Welcome to the home route!"
		});
	});
};
