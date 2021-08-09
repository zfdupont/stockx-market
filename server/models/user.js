const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type: String,
        required: true
    },
    watchLists: {
        type: List[String],
    }
});

module.exports = mongoose.model('user',userSchema);