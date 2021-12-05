const router = require('express').Router();
const {addJobHandler} = require("../controller")

router.post('/add',addJobHandler);

module.exports = router;