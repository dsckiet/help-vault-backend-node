const Schema = require("mongoose").Schema;

const geoSchema = require("./geo");
const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    volunteerRequired: {
        type: Number,
        required: true,
        trim: true,
    },
    location: {
        type: geoSchema,
        index: '2dsphere'
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    volunteers: [{
        type: Schema.Types.ObjectId,
        ref: "user"
    }]
},
{
    timestamps: true
});

module.exports = require("mongoose").model("Job", jobSchema);