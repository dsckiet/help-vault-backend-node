const router = require('express').Router();
const {addJobHandler,getJobsHandler} = require("../controller")

router.post('/add',addJobHandler);
router.post('/getJobs',getJobsHandler);

module.exports = router;