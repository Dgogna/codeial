const Post=require("../models/post");
const Comment=require("../models/comment");

module.exports.create =function(req,res){
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log("error in posting the post");
            return ;
        }
        return res.redirect("/");
    })
}

module.exports.destroy=function(req,res){
    // console.log(req.params);
    Post.findById(req.params.id,function(err,post){
        // .id willl convert the object id into string feature from mongoose
        if(post.user == req.user.id){
            post.remove();
            Comment.deleteMany({post:req.params.id},function(err){
                return res.redirect("back");
            })
        }
        else{
            return res.redirect("back");
        }
    })
}