const {Router} = require('express');
const { home, signup, signupPage, login, loginPage, googleCallback, index, reset, resetpass, profile } = require('../controller/user.controller');
const passport = require('passport');
const router = Router();

router.get("/", home);

router.get("/index", index);

router.post("/signup", signup);

router.get("/signup", signupPage);

router.post("/login",passport.authenticate("local", {successRedirect:"/user/index", failureRedirect:"/user/login"}), login);

router.get("/login", loginPage);

router.get("/reset", reset);

router.patch("/reset", resetpass);

router.get("/profile", profile);

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), googleCallback);

module.exports={router}