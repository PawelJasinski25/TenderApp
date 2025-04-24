// controllers/tenderController.js
const tendersModel = require('../models/tenders');

// Funkcja do pobierania wszystkich przetargów
// controllers/tenderController.js
const getAllTenders = (req, res) => {
    tendersModel.getAllTenders((err, tenders) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy pobieraniu danych');
        }
        console.log(tenders);  // Sprawdzamy, co dokładnie jest przekazywane do widoku
        res.render('tenders', { tenders });
    });
};


// Funkcja do dodawania nowego przetargu
const addTender = (req, res) => {
    const { name, description, startDate, endDate, maxPrice } = req.body;
    tendersModel.addTender(name, description, startDate, endDate, maxPrice, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Błąd przy dodawaniu przetargu');
        }
        res.redirect('/tenders');
    });
};

module.exports = {
    getAllTenders,
    addTender
};
