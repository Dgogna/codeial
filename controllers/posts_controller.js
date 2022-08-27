const Post=require("../models/post");
const Comment=require("../models/comment");

module.exports.create =async function(req,res){

// convertinf the code to async await

    try{
        await Post.create({
            content:req.body.content,
            user:req.user._id
        });
    
        return res.redirect("/");
    }
    catch(err){
        console.log("error ",err);
        return ;
    }



    // Post.create({
    //     content:req.body.content,
    //     user:req.user._id
    // },function(err,post){
    //     if(err){
    //         console.log("error in posting the post");
    //         return ;
    //     }
    //     return res.redirect("/");
    // })
}

module.exports.destroy=async function(req,res){
    
    // console.log(req.params);

    try{
        let post = await Post.findById(req.params.id);

        if(post.user == req.user.id){
            post.remove();
            await Comment.deleteMany({post:req.params.id});
    
            return res.redirect("back");
    
        }
        else{
            return res.redirect("back");
        }
    }catch(err){
        console.log("error ",err);
        return ;
    }




}