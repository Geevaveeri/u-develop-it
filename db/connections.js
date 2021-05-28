const mysql = require("mysql2");
require('dotenv').config();

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: process.env.DB_PASS,
    database: 'election'
});

module.exports = db;