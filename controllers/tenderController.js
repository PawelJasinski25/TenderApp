const tendersModel = require('../models/tenders');

const getActiveTenders = (req, res) => {
    tendersModel.getActiveTenders((err, tenders) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy pobieraniu danych');
        }
        console.log(tenders);
        res.render('tenders', { tenders });
    });
};

const getTenderDetails = (req, res) => {
    const tenderId = req.params.id;
    tendersModel.getTenderById(tenderId, (err, tender) => {
        if (err) {
            console.error(err);
            return res.status(404).send('Przetarg nie znaleziony');
        }
        res.render('tender-details', { tender });
    });
};

const addTender = (req, res) => {
    const { title, description, institution, start_date, end_date, max_budget } = req.body;

    if (!title || !description || !institution || !start_date || !end_date || !max_budget) {
        return res.status(400).send('Wszystkie pola są wymagane');
    }
    tendersModel.addTender(title, description, institution, start_date, end_date, max_budget, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy dodawaniu przetargu');
        }
        res.redirect('/tenders');
    });
};

const getEndedTenders = (req, res) => {
    tendersModel.getEndedTenders((err, tenders) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy pobieraniu zakończonych przetargów');
        }
        res.render('tenders-ended', { tenders });
    });
};

const getEndedTenderDetails = (req, res) => {
    const tenderId = req.params.id;

    tendersModel.getTenderById(tenderId, (err, tender) => {
        if (err) return res.status(404).send('Przetarg nie znaleziony');

        tendersModel.getValidOffersForTender(tenderId, tender.max_budget, (err, offers) => {
            if (err) return res.status(500).send('Błąd przy pobieraniu ofert');

            const hasValidOffer = offers.length > 0;
            const noOffers = offers.length === 0;
            const allOffersExceedBudget = offers.every(offer => offer.amount > tender.max_budget);

            res.render('ended-tender-details', {
                tender,
                offers,
                hasValidOffer,
                noOffers,
                allOffersExceedBudget
            });
        });
    });
};


const submitOffer = (req, res) => {
    const tenderId = req.params.id;
    const { bidderName, offerAmount, offerDate } = req.body;

    if (!bidderName || !offerAmount || !offerDate) {
        return res.status(400).send('Wszystkie pola są wymagane');
    }

    tendersModel.addOffer(tenderId, bidderName, offerAmount, offerDate, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy dodawaniu oferty');
        }
        res.redirect(`/tenders/${tenderId}`);
    });
};



module.exports = {
    getActiveTenders,
    getTenderDetails,
    getEndedTenders,
    getEndedTenderDetails,
    submitOffer,
    addTender
};
