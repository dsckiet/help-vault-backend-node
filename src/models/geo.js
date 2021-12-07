const Schema = require("mongoose").Schema;

const geoSchema = new Schema({
	type: {
		type: String,
		default: "Point"
	},
	coordinates: {
		type: [Number]
	}
});

module.exports = geoSchema;
