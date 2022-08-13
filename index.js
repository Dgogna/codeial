
const express=require("express");
const app=express();
const port=3000;

// use express router
app.use("/",require("./routes/index"));



app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
        return ;
    }

    console.log(`server is started on port: ${port}`);

});