const developmentLogger = require("./developmentLogger");
const productionLogger = require("./productionLogger");
const { NODE_ENV } = require("../../config/secret");
let logger = null;

if (NODE_ENV === "development") {
	logger = developmentLogger();
}

if (NODE_ENV === "production") {
	logger = productionLogger();
}

module.exports = logger;
