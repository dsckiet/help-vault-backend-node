const cluster = require("cluster");
const os = require("os");
const process = require('process');
const logger = require("./utility/logger/logger")
const {PORT} = require("./config/secret");
const app = require("./app");
let { NODE_ENV } = require("./config/secret");

if (cluster.isPrimary) {
	logger.info(`Master ${process.pid} is running`);
	let cpuCount;
	if (NODE_ENV === "production") {
		cpuCount = os.cpus().length;
	} else {
		cpuCount = 1;
	}
	for (let j = 0; j < cpuCount; j++) {
		cluster.fork();
	}
} else {
	logger.info(`Worker ${process.pid} started`);
	app.listen(PORT, () => {
		logger.info(`🚀 Api Running at http://localhost:${PORT}`);
	});
}

cluster.on("exit", (worker) => {
	logger.info(`Worker ${worker.id} died'`);
	logger.info(`Staring a new one...`);
	cluster.fork();
});
