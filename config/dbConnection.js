const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("./secret");
const logger = require("../utility/logger/logger");
if (NODE_ENV === "development") mongoose.set("debug", true);

mongoose
	.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		logger.info("DB Connected!!");
	});

module.exports = mongoose;
