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
const PORT = process.env.PORT || 3001;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: credentials.host,
    user: credentials.user,
    password: credentials.pass,
    database: credentials.database,
})
connection.connect(err => {
    if (err) throw err;
    console.log('database connected')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));