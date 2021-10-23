const Schema = require("mongoose").Schema;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    encryptedPassword: {
        type: String,
    },
},
{
    timestamps: true
})

module.exports = require("mongoose").model("User",userSchema);