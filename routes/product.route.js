const {Router} = require('express');
const { productPage, indexPage, allproduct, createproduct, productform, singlepro, cartpage, getCart, addcart, cartqtyplus, cartqtyminus, removeItem } = require('../controller/product.controller');
const prouter = Router();

prouter.get("/", productPage);

prouter.get("/index", indexPage);

prouter.get("/allproducts", allproduct);

prouter.get("/productcreate", productform);

prouter.post("/createproduct", createproduct);

prouter.get("/singleproduct/:id", singlepro);

prouter.get("/cart", cartpage);

prouter.get("/allcartitems", getCart);

prouter.get("/cart/:id", addcart);

prouter.patch("/cart/:id", cartqtyplus);

prouter.patch("/cartminus/:id", cartqtyminus);

prouter.delete("/cart/:id", removeItem)

module.exports={prouter}