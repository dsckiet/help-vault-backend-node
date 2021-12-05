const Schema = require("mongoose").Schema;

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
        type: {
            type: String, 
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

module.exports = require("mongoose").model("Job", jobSchema);