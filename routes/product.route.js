const {Router} = require('express');
const { productPage, indexPage } = require('../controller/product.controller');
const prouter = Router();

prouter.get("/", productPage);
prouter.get("/index", indexPage)

module.exports={prouter}