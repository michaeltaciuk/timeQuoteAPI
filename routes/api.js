const express = require('express');
const router = express.Router();
const Quotes = require('../models/quotes');

router.get('/quote', (req, res, next) => {
    // This will return all the data, exposing only the id and text field to the client
    Quotes.find({}, 'text')
        .then((data) => res.json(data))
        .catch(next);

    //let id = Math.floor(Math.random()*quotes.length)
    //res.json(quotes[id].text);
});

module.exports = router;