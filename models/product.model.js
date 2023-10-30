const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    manufacturedby:String,
    description:String,
    price:Number,
    size:String,
    category:String,
    image:String,
    ratings: [{value:Number }],
    reviews: [{text: String}],
    seller: String,
})

const productmodel = mongoose.model("productt", productSchema);

module.exports = {productmodel}