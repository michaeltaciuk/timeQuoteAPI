const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for quotes
const QuotesSchema = new Schema({
    id: Number,
    text: String,
    name: String
});

// Create model for quotes
const Quotes = mongoose.model('quote', QuotesSchema);

module.exports = Quotes;