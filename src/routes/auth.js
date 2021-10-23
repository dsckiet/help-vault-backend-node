const router = require("express").Router();

router.get("/signup",(req,res) => {
    return res.status(200).json({
        msg: "Welcome to the signup route..."
    })
})

module.exports = router;
