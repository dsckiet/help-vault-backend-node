const router = require("express").Router();
const {signUpHandler} = require("../controller")
router.post("/signup",signUpHandler);

module.exports = router;
