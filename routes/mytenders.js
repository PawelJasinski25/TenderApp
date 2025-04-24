var express = require('express');
const tenderController = require('../controllers/tenderController');
var router = express.Router();

router.get('/', tenderController.getAllTenders);
router.get('/add', (req, res) => {
    res.render('add-tender');
});
router.post('/add', tenderController.addTender);
router.get('/:id', tenderController.getTenderDetails);


module.exports = router;
