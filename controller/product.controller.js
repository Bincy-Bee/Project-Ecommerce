const { productmodel } = require("../models/product.model")

const productPage = (req,res)=>{
    res.send("welcome to Product Page")
}

const indexPage = (req,res)=>{
    res.render("index")
}

const productform = (req,res)=>{
    res.render("productadd")
}

const allproduct = async(req,res)=>{
    try {
        let data = await productmodel.find();
        return res.send(data);
    } catch (error) {
        return res.send(error.message)
    }
}
const createproduct = async(req,res)=>{
    try {
        let product = await productmodel.create(req.body);
        return res.send("New Product Added Successfully by admin")
    } catch (error) {
        return res.send(error.message)
    }
}


module.exports={productPage, indexPage, allproduct, createproduct, productform}