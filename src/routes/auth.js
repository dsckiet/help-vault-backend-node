const router = require("express").Router();
const {signUpHandler,signInHandler} = require("../controller")
const { check } = require("express-validator");

router.post("/signup", [check("email")
.notEmpty()
.withMessage("Email Field is Required")
.isEmail()
.withMessage("Please provide a valid email"),
check("plainPassword")
    .isLength({ min: 5 })
    .withMessage( "Password should be at least 5 character long")
    .notEmpty()
    .withMessage("Password Field is Required")],
signUpHandler);

router.post("/signin", [check("email")
.notEmpty()
.withMessage("Email Field is Required")
.isEmail()
.withMessage("Please provide a valid email"),
check("plainPassword")
    .isLength({ min: 5 })
    .withMessage( "Password should be at least 5 character long")
    .notEmpty()
    .withMessage("Password Field is Required")],
    signInHandler);

module.exports = router;
