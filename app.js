const express = require("express");

const app = express();

module.exports = () => {
	app.listen(8081, () => {
		console.log("🚀 Api Running at http://localhost:8081");
	});

	app.get("/", (req, res) => {
		return res.status(200).json({
			msg: "Welcome to the home route!"
		});
	});
};
