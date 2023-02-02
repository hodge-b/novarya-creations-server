/**
 * @file
 * 
 * Server API file for novarya-creations
 */
require('dotenv').config();
const credentials = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER, 
    pass: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
}

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

// app.use('/', express.static(path.join(__dirname, '/public')));

const mysql = require('mysql2');
const connection = mysql.createPool({
    host: credentials.host,
    user: credentials.user,
    password: credentials.pass,
    database: credentials.database,
})


app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (err, result) => {
        console.log(result)
    });
    res.send("novarya-creations-server");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));