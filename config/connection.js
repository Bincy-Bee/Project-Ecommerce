const mongoose = require('mongoose');
require("dotenv").config();

const connection = async()=>{
    const url = process.env.DB_URL;
    await mongoose.connect(url);
    console.log("Database Connected successfully");
}

module.exports = {connection}