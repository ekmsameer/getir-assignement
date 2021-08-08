const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const recordsController = require('./controllers/records');
router.use(bodyParser.json());


//setup middleware here
router.use(function (req, res, next) {
    next();
});

router.route('/record').post(recordsController.getRecords)
module.exports = router;