const express = require('express');
const { connection } = require('./config/connection');
const app = express();
const session = require('express-session');
const passport = require('passport');
const { router } = require('./routes/user.route');
const { prouter } = require('./routes/product.route');
const { localAuth, googleAuth } = require('./helper/local');
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({secret : "secret"}));
localAuth(passport);
googleAuth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use("/user",router);
app.use("/product", prouter)




//Server Listening
const PORT = process.env.PORT;
const HOST = process.env.HOST;
app.listen(PORT,()=>{
    console.log(`Server is listening on http://${HOST}:${PORT}`);
    connection();
})


