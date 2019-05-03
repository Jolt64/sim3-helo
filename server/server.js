require('dotenv').config();
const express = require('express');
const massive = require('massive');
const CF = require('./controller');


const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, console.log(`${SERVER_PORT} cars in a jam`))
})

app.use(express.json())


// app.post(`/register-user`, CF.registerUser)
app.post(`/register-user`, (req, res) => {
    console.log('hit');
})