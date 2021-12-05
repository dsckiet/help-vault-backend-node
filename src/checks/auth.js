const { check } = require("express-validator");

exports.signInChecks = [
    check("email")
        .notEmpty()
        .withMessage("Email Field is Required")
        .isEmail()
        .withMessage("Please provide a valid email"),
    check("plainPassword")
        .isLength({ min: 5 })
        .withMessage("Password should be at least 5 character long")
        .notEmpty()
        .withMessage("Password Field is Required")
]

exports.signUpChecks = [
    check("email")
        .notEmpty()
        .withMessage("Email Field is Required")
        .isEmail()
        .withMessage("Please provide a valid email"),
    check("plainPassword")
        .isLength({ min: 5 })
        .withMessage("Password should be at least 5 character long")
        .notEmpty()
        .withMessage("Password Field is Required")
]