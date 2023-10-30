const { usermodel } = require('../models/user.model');

const localStrategy = require('passport-local').Strategy;
const googleStrategy = require('passport-google-oauth20').Strategy;

const localAuth = (passport)=>{
    passport.use(new localStrategy({usernameField : "email"},async(email, password, done)=>{
        try {
            let User = await usermodel.findOne({email : email});

            if(!User){
                return done(null,false)
            }
            if(User.password != password){
                return done(null,false)
            }

            return done(null,User)
        } catch (error) {
            return done(error,false)
        }
    })
    );
    passport.serializeUser((user, done)=>{
        return done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
        try {
            let User = await usermodel.findById(id);
            return done(null,User)
        } catch (error) {
            return done(error,false)
        }
    })
}
const googleAuth = (passport)=>{
    passport.use(new googleStrategy({
        clientID: "1027144264499-qehfduhl1leu52v5eoo1il87l6h471bg.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8090/auth/google/callback"
    },(accessToken, refreshToken, profile, cb)=>{
        console.log(profile);
        return cb(null,profile)
    })
    );
    passport.serializeUser((user,done)=>{
        return done(null,user.id)
        // return done(null,user)
    })
    passport.deserializeUser(async(id,done)=>{
        try {
            let User = await usermodel.findById(id);
            return done(null,User)
        } catch (error) {
            return done(error,false)
        }
        // return done(null,user)
    });
}

module.exports={localAuth, googleAuth}