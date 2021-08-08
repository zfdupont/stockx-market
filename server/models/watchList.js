const mongoose = require('mongoose');

const watchListSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    prods:{
        type: List[str],
        required: true
    }
});

module.exports = mongoose.model('watchLists', watchListSchema)