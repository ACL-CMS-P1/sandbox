const express = require('express');
const app = express();
const jsonBodyParser = require('body-parser').json();
require('dotenv').config();
const key = process.env.SQREEN_API_KEY;
const request = require('superagent');


app.get('/:email', jsonBodyParser, (req, res) => {
    const url = 'https://api.sqreen.io/v1/emails/'
    const email = req.params.email;
    console.log(key);

    request
        .get(`${url}${email}`)
        .set('x-api-key', key)
        .end((err, response) => {
            if(err) throw new Error(err);
            res.send(response);
        })
        
});

module.exports = app;
