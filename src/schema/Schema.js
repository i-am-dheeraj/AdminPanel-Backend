const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    age:String,
    username:String,
    password:String,
    gender:String,
    city: String,
    state: String,
    country: String
});

module.exports = mongoose.model('Users', UsersSchema);