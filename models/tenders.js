const db = require('./db');

// Funkcja do pobierania wszystkich przetargów
const getAllTenders = (callback) => {
    const sql = 'SELECT * FROM tenders';
    db.query(sql, callback); // bezpośrednie przekazanie callbacka
};

// Funkcja do dodawania nowego przetargu
const addTender = (name, description, startDate, endDate, maxPrice, callback) => {
    const sql = 'INSERT INTO tenders (name, description, start_date, end_date, max_price) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [name, description, startDate, endDate, maxPrice], callback); // również przekazujemy callbacka bezpośrednio
};

module.exports = {
    getAllTenders,
    addTender
};
