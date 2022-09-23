const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes');

router.get('/quote', (req, res, next) => {
    // This will return all the data, exposing only the id and text field to the client
    Quotes.find({}, 'text')
        .then((data) => res.json(data[Math.floor(Math.random()*data.length)].text))
        .catch(next);
});

module.exports = router;