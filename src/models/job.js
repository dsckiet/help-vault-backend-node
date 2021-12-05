const Schema = require("mongoose").Schema;

const geoSchema = new Schema({
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number]
    }
  });  

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
    }
},
{
    timestamps: true
});

module.exports = require("mongoose").model("Job", jobSchema);