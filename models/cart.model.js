const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userID : { type: mongoose.Schema.Types.ObjectId, ref: "userr"},
  products:[{
    productId:String,
    title:String,
    description:String,
    price:Number,
    size:String,
    category:String,
    image:String,
    quantity: Number,
  }]
});

const cartmodel = mongoose.model("cartt", cartSchema);

module.exports = {cartmodel}
