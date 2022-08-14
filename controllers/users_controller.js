
module.exports.profile=function(req,res){
    return res.render("user-profile",{
        title:"codeial/Profile"
    })
}

// for sign up 
module.exports.signUp=function(req,res){
    return res.render("user_sign_up",{
        title:"SignUP"
    })
};

// for sign in
module.exports.signIn=function(req,res){
    return res.render("user_sign_in",{
        title:"SignIN"
    })
};