const {Router} = require('express');
const { productPage, indexPage, allproduct, createproduct, productform, singlepro, cartpage, getCart, addcart } = require('../controller/product.controller');
const prouter = Router();

prouter.get("/", productPage);

prouter.get("/index", indexPage);

prouter.get("/allproducts", allproduct);

prouter.get("/productcreate", productform);

prouter.post("/createproduct", createproduct);

prouter.get("/singleproduct/:id", singlepro);

prouter.get("/cart", cartpage);

prouter.get("/allcartitems", getCart);

prouter.post("/cart", addcart)

module.exports={prouter}