const router = require("express").Router();

router.use("/auth",require("./routes/auth"))
router.use("/profile",require("./routes/profile"))
module.exports = router;
