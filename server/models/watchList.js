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
    products:{
        type: List[String],
    
    }
});

module.exports = mongoose.model('watchLists', watchListSchema)