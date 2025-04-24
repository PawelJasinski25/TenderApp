const tendersModel = require('../models/tenders');

const getAllTenders = (req, res) => {
    tendersModel.getAllTenders((err, tenders) => {
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

module.exports = {
    getAllTenders,
    getTenderDetails,
    addTender
};
