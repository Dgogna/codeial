
module.exports.home=function(req,res){
    console.log('Cookies: ', req.cookies);
    res.cookie("user_id",23);
    return res.render("home",{
        title:"Home"
    });
}