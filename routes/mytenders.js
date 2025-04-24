var express = require('express');
const tenderController = require('../controllers/tenderController');
var router = express.Router();

router.get('/', tenderController.getAllTenders);
router.post('/add', tenderController.addTender);

module.exports = router;
