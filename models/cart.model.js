const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userID : { type: mongoose.Schema.Types.ObjectId, ref: "userr" },
  products : [{
    productID : Number,
    quantity: Number,
  }]
});

const cartmodel = mongoose.model("cart", cartSchema);

module.exports = {cartmodel}
