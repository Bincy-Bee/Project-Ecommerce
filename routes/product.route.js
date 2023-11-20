const {Router} = require('express');
const { productPage, indexPage, allproduct, createproduct, productform } = require('../controller/product.controller');
const prouter = Router();

prouter.get("/", productPage);

prouter.get("/index", indexPage);

prouter.get("/allproducts", allproduct);

prouter.get("/productcreate", productform);

prouter.post("/createproduct", createproduct);

module.exports={prouter}