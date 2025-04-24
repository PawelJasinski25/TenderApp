const db = require('./db');

const getAllTenders = (callback) => {
    const sql = 'SELECT * FROM tenders';
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

const addTender = (title, description,institution, startDate, endDate, maxBudget, callback) => {
    const sql = 'INSERT INTO tenders (title, description,institution, start_date, end_date, max_budget) VALUES (?, ?, ?, ?, ?,?)';
    db.query(sql, [title, description,institution, startDate, endDate, maxBudget], callback);
};

module.exports = {
    getAllTenders,
    getTenderById,
    addTender
};
