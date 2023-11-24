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
        return res.cookie("productid", product.id).send("New Product Added Successfully by admin")
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
        const userID = req.user.id;
        let data = await cartmodel.findOne({userID});
        res.send(data)
    } catch (error) {
        return res.send(error.message)
    }
}
const addcart = async(req,res)=>{
    const {id}= req.params;
    const userID = req.user.id;
    req.body.userID = req.user.id;
    
    try {
        let item = await productmodel.findById(id);
        let cart = await cartmodel.findOne({userID});
    
        if(cart){
            let index = cart.products.findIndex((p)=> p.productId == item.id);
    
            if( index > -1){
                let proitem = cart.products[index];
                proitem.quantity = proitem.quantity +1;
                cart.products[index] = proitem;
            }
            else{
                cart.products.push({productId : item.id, title:item.title, description: item.description, price:item.price, size:item.size, category:item.category, image:item.image, quantity:1})
            }
            cart =  await cart.save();
            res.send(cart)
        }
        else{
            let newCart = await cartmodel.create({
                userID : req.user.id,
                products : [{
                    productId : item.id,
                    title : item.title,
                    description : item.description,
                    price : item.price,
                    size : item.size,
                    category : item.category,
                    image : item.image,
                    quantity:1,
                }]
            });
            res.send(newCart)
        }
        
    } catch (error) {
        return res.send(error.message)
    }
 
}



module.exports={productPage, indexPage, allproduct, createproduct, productform, singlepro, cartpage, getCart, addcart}