const { cartmodel } = require("../models/cart.model")
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
        let data = await productmodel.find().populate("userID");
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

const singlepro = async(req,res)=>{
    try {
        const {id} = req.params;
        const singleitem = await productmodel.findById(id)
        res.render("singleproduct", {singleitem})
    } catch (error) {
        return res.send(error.message)
    }
}
const cartpage = (req,res)=>{
    res.render("cart")
}

const getCart = async(req,res)=>{
    try {
        let data = await cartmodel.find().populate("productID");
        res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}
const addcart = async(req,res)=>{
    console.log(req.cookies);
    const {id} = req.cookies;
    console.log(id)
    const userID = id;
    const {productID, quantity} = req.body;
    try {
        let cart = await cartmodel.findOne({userID});
        if(cart){
            let index =  cart.products.findIndex(p => p.productID == productID);
            if(index > -1){
                //product exists in the cart, update the quantity
                let productItem = cart.products[index];
                productItem.quantity = quantity;
                cart.products[index] = productItem;
            }
            else {
                //product does not exists in cart, add new item
                cart.products.push({ productID, quantity });
              }
              cart = await cart.save();
              return res.send(cart)
        }
        else{
            //no cart for user, create new cart
            const newCart = await cart.create({
                userID,
                products: [{ productID, quantity }]
            })
            return res.send(newCart)
        }
    } catch (error) {
        return res.send(error.message)
    }
}



module.exports={productPage, indexPage, allproduct, createproduct, productform, singlepro, cartpage, getCart, addcart}