const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "guestbook"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;