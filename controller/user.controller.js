const { usermodel } = require("../models/user.model")

const home = (req,res)=>{
    res.send("welcome to home")
}
const index = (req,res)=>{
    res.render("index", {user : req.user})
}
const signup = async(req,res)=>{
    try {
        let data = await usermodel.findOne({email : req.body.email});
        if(data){
            return res.send("user already exits")
        }
        else{
            data = await usermodel.create(req.body)
            return res.status(201).send(data)
        }
    } catch (error) {
        return res.send(error.message);
    }
}

const signupPage = (req,res)=>{
    res.render("signup")
}

const login = async(req,res)=>{
    try {
        let data = await usermodel.findOne({email : req.body.email});
        if(!data){
            return res.status(401).send("Invalid User");
        }
        if(data.password != req.body.password){
            return res.status(401).send("Invalid Password");
        }
        return res.send("loggeg In Successfully")
    } catch (error) {
        return res.send(error.message);
    }

    // res.send("Logged in Succesfully");
}
const reset = (req,res)=>{
    res.render("resetpassword")
}
const resetpass = async (req,res)=>{
    let {oldpassword, newpassword} = req.body;
    if(req.user.password == oldpassword){
        let data = await usermodel.findByIdAndUpdate(req.user.id,{password : newpassword});
        let passupdate = await usermodel.findById(req.user.id);
        // res.send(passupdate);
        res.render("login")
    }
    else{
        res.send("Wrong password");
    }
}

const loginPage = (req,res)=>{
    res.render("login")
}

const profile = (req,res)=>{
    if(req.user){
        res.send(req.user)
    }
    else{
        res.redirect("/user/login")
    }
}

const googleCallback =  (req, res)=> {
    res.send("Successfully Sign In with Google");
}
module.exports={home,index, signup, signupPage, login, loginPage, googleCallback, reset, resetpass, profile}