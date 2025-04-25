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

        tendersModel.getAllOffersForTender(tenderId, (err, offers) => {
            if (err) return res.status(500).send('Błąd przy pobieraniu ofert');


            tendersModel.getValidOffersForTender(tenderId, tender.max_budget, (err, validOffers) => {
                if (err) return res.status(500).send('Błąd przy pobieraniu ofert');

                const noOffers = offers.length === 0;
                const allOffersExceedBudget = offers.length > 0 && validOffers.length === 0;

                res.render('ended-tender-details', {
                    tender,
                    offers,
                    validOffers,
                    noOffers,
                    allOffersExceedBudget
                });
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
    tendersModel.getTenderById(tenderId, (err, tender) => {
        if (err || !tender) {
            console.error(err || 'Nie znaleziono przetargu');
            return res.status(404).send('Przetarg nie znaleziony');
        }

        tendersModel.addOffer(tenderId, bidderName, offerAmount, offerDate, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Błąd przy dodawaniu oferty');
            }

            res.render('confirmation', {
                tender,
                offer: {
                    name: bidderName,
                    amount: offerAmount,
                    date: new Date(offerDate).toLocaleString('pl-PL'),
                }
            });
        });
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
