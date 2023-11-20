const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    size:String,
    category:String,
    image:String,
    // ratings: [{value:Number }],
    // reviews: [{text: String}],
})

const productmodel = mongoose.model("productt", productSchema);

module.exports = {productmodel}