const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rating: Number

});

const user =mongoose.model('User', userModel);

module.exports = user;