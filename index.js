const cluster = require("cluster");
const os = require("os");
const process = require('process');

const runExpressServer = require("./app");
let { NODE_ENV } = require("./config/secret");

if (cluster.isPrimary) {
	console.log(`Master ${process.pid} is running`);
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
	console.log(`Worker ${process.pid} started`);
	runExpressServer();
}

cluster.on("exit", (worker) => {
	console.log(`Worker ${worker.id} died'`);
	console.log(`Staring a new one...`);
	cluster.fork();
});
