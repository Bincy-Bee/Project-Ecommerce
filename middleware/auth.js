const jwt = require('jsonwebtoken');

const isAuth = (req,res,next)=>{
    if(req.user){
        next()
    }
    else{
        res.redirect("login")
    }
}
// const verifyToken = (req,res,next)=>{
//     const {token} = req.cookies;
//     console.log(token);
//     if(token){
//         const decode = jwt.verify(token, "secret");
//         console.log(decode)
//         next()
//     }
//     else{
//         res.redirect("login")
//     }
// }

module.exports={isAuth, }