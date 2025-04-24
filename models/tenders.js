const db = require('./db');

const getActiveTenders = (callback) => {
    const sql = 'SELECT * FROM tenders WHERE end_date > NOW()';  // Dodajemy warunek, aby wyświetlić tylko przetargi, które nie są zakończone
    db.query(sql, callback);
};

const getTenderById = (id, callback) => {
    const sql = 'SELECT * FROM tenders WHERE id = ?';
    db.query(sql, [id], (err, results) => {
        if (err) return callback(err);
        if (results.length === 0) return callback(new Error('Nie znaleziono przetargu'));
        callback(null, results[0]);
    });
};

const getEndedTenders = (callback) => {
    const sql = 'SELECT * FROM tenders WHERE end_date < NOW()';
    db.query(sql, callback);
};

const getValidOffersForTender = (tenderId, maxBudget, callback) => {
    const sql = `
        SELECT * FROM offers 
        WHERE tender_id = ? AND amount <= ?
        ORDER BY amount ASC
    `;
    db.query(sql, [tenderId, maxBudget], callback);
};


const addTender = (title, description,institution, startDate, endDate, maxBudget, callback) => {
    const sql = 'INSERT INTO tenders (title, description,institution, start_date, end_date, max_budget) VALUES (?, ?, ?, ?, ?,?)';
    db.query(sql, [title, description,institution, startDate, endDate, maxBudget], callback);
};

const addOffer = (tenderId, bidderName, offerAmount, offerDate, callback) => {
    const query = `
        INSERT INTO offers (tender_id, bidder_name, amount, submitted_at)
        VALUES (?, ?, ?, ?)
    `;
    db.query(query, [tenderId, bidderName, offerAmount, offerDate], callback);
};


module.exports = {
    getActiveTenders,
    getTenderById,
    getEndedTenders,
    getValidOffersForTender,
    addTender,
    addOffer
};
