const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("./index");

if (NODE_ENV === "development") mongoose.set("debug", true);

mongoose.connect(MONGO_URI, {
	useMongoClient: true,
	connectTimeoutMS: 1000,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
});
