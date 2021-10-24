const Schema = require("mongoose").Schema;

const profileSchema = new Schema ({
   firstName :{
       type: String,
       required: true,
       trim: true
   },
   middleName :{
    type: String,
    trim: true
   },
   lastName : {
    type: String,
    required: true,
    trim: true
   },
   phoneNumber: {
       type: Number,
       required: true,
       minlength: 10,
       maxlength: 10
   },
   gender: {
       type: String,
       required: true,
       enum: ["male","female"]
   },
   dateOfBirth: {
       type: Date,
       required: true
   },
   houseNo: {
       type: String
   },
   locality: {
    type: String,
    required: true
   },
   district: {
    type: String,
    required: true
   },
   state: {
    type: String,
    required: true
   }
},
{
    timestamps: true
})

module.exports = require("mongoose").model("Profile",profileSchema);