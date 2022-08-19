const Post=require("../models/post");
module.exports.home=function(req,res){
    // console.log('Cookies: ', req.cookies);
    // res.cookie ("user_id",23);
    // Post.find({},function(err,posts){
    //     if(err){
    //         console.log("error in fetching the posts");
    //         return ;
    //     }
    //     // console.log(posts);
    //     return res.render("home",{
    //         title:"Codeial | Home",
    //         posts:posts
    //     });
    // })

    // populate the user of each post
    Post.find({})
    .populate("user")
    .populate({
        path:"comments",
        populate:{
            path:"user"
        }
    })
    .exec(function(err,posts){
        if(err){
            console.log("error in fetching the posts");
            return ;
        }
        // console.log(posts);
        return res.render("home",{
            title:"Codeial | Home",
            posts:posts
        });
    })
    
}