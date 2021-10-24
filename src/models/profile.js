const Schema = require("mongoose").Schema;

const profileSchema = new Schema ({
   firstName :{
       type: String,
       required: true,
   },
   middleName :{
    type: String,
   }
},
{
    timestamps: true
})

module.exports = require("mongoose").model("Profile",profileSchema);