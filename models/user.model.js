const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
})

const usermodel = mongoose.model("userr", userSchema);

module.exports= { usermodel}