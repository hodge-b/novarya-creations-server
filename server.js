/**
 * @file
 * 
 * Server API file for novarya-creations
 */
require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const database = process.env.DB_DATABASE;

const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const PORT = process.env.PORT || 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: pass,
    database: database,
});
connection.connect();


const cors = require('cors');
app.use(cors({origin: ['https://www.novaryacreations.ca', 'http://localhost:3000']}));


app.get('/users', (req, res) => {
    connection.query('select * from users', (err, result) => {
        res.send(result);
    });
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));