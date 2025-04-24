var express = require('express');
const tenderController = require('../controllers/tenderController');
var router = express.Router();

router.get('/', tenderController.getActiveTenders);
router.get('/add', (req, res) => {
    res.render('add-tender');
});
router.post('/add', tenderController.addTender);
router.get('/ended', tenderController.getEndedTenders);
router.get('/ended/:id', tenderController.getEndedTenderDetails);
router.get('/:id', tenderController.getTenderDetails);
router.post('/:id/submit-offer', tenderController.submitOffer);


module.exports = router;
