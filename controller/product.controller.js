const productPage = (req,res)=>{
    res.send("welcome to Product Page")
}

const indexPage = (req,res)=>{
    res.render("index")
}
module.exports={productPage, indexPage}