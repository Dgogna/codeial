const User = require("../models/user");

module.exports.profile=function(req,res){
    return res.render("user-profile",{
        title:"codeial/Profile"
    })
}

// for sign up 
module.exports.signUp=function(req,res){
    return res.render("user_sign_up",{
        title:"Sign up"
    })
};

// for sign in
module.exports.signIn=function(req,res){
    return res.render("user_sign_in",{
        title:"Sign in"
    })
};

// for signing up or to create a new user

module.exports.create=function(req,res){
    // todo later

    if(req.body.password != req.body.confirm_password){
        // console.log("pass not matched");
        return res.redirect("back");
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("error in finding user in signing up");
            return ;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("error in creating the user");
                    return ;
                }
                return res.redirect("/users/sign-in")
            })
        }else{
            return res.redirect("back");
        }
    })

}

// get the sign in data

module.exports.createSession=function(req,res){
    // todo later
}