const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    watchLists: {
        type: List[str],
        required: true
    }
});

module.exports = mongoose.model('user',userSchema);