const router = require('express').Router();
const {addJobHandler,getJobsHandler,applyJobHandler} = require("../controller")
const passport = require("../../utility/passport/passport");
router.post('/add',addJobHandler);
router.post('/getJobs',getJobsHandler);
router.post('/apply/:jobId',	passport.authenticate("jwt", {
    session: false,
    failureRedirect: "/api/failurejson"
}),applyJobHandler);
module.exports = router;