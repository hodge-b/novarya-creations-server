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
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(cors({origin: "*"}));
// app.use('/', express.static(path.join(__dirname, '/public')));

const mysql = require('mysql');
const connection = mysql.createPool({
    host: credentials.host,
    user: credentials.user,
    password: credentials.pass,
    database: credentials.database,
})

app.get('/login', (req, res) => {
    connection.query('SELECT * FROM users', (err, result) => {
        res.send(result);
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));