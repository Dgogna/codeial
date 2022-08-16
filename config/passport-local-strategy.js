const passport=require("passport");
const User = require("../models/user");

const LocalStrategy=require("passport-local").Strategy;

passport.use(new LocalStrategy({
    usernameField:"email"
    },
    function(email,password,done){
        // find the user and establish its identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log("eoor in findint the user---> passport");
                return done(err);
            }
            if(!user || user.password!=password){
                console.log("Invalid username/Password");
                return done(null,false);
            }
            return done(null,user);
        })
    }
));

// serializing the user to decide which key is to be used in the cookies


passport.serializeUser(function(user,done){
    return done(null , user.id);
})


// deserializing the user from the cookies

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("error in findint the user ---> passport");
            return done(err);
        }
        return done(null,user);
    })
})




module.exports = passport

