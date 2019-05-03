require('dotenv').config();
const express = require('express');
const massive = require('massive');
const CF = require('./controller');


const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.listen(SERVER_PORT, console.log(`${SERVER_PORT} cars in a jam`))