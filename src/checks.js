const {signInChecks,signUpChecks} = require("./checks/auth");
const {createProfileChecks} = require("./checks/profile")
module.exports = {
    signInChecks,
    signUpChecks,
    createProfileChecks
}