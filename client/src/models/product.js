const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    ticker: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('product', productSchema);