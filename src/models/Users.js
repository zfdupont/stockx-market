const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema and Model

const UserSchema = new Schema({
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    }, 
    username: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password:{
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
});

UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('user', UserSchema);

module.exports = User;