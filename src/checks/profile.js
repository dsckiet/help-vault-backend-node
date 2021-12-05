const { check } = require("express-validator");
exports.createProfileChecks = [
    check("firstName").notEmpty().withMessage("First name is required"),
    check("firstName").notEmpty().withMessage("Last name is required"),
    check("phoneNumber")
        .notEmpty()
        .withMessage("Phone Number is required")
        .isNumeric()
        .withMessage("Input a valid phone number"),
    check("gender").notEmpty().withMessage("Gender is required"),
    check("dateOfBirth")
        .notEmpty()
        .withMessage("Date of birth is required")
        .isDate()
        .withMessage("Enter a valid date"),
    check("locality").notEmpty().withMessage("Locality is required"),
    check("district").notEmpty().withMessage("District is required"),
    check("state").notEmpty().withMessage("State is required"),
    check("bio").notEmpty().withMessage("Bio is required")
]