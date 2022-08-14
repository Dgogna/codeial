
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
}

// get the sign in data

module.exports.createSession=function(req,res){
    // todo later
}