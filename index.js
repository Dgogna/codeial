
const express=require("express");
var cookieParser = require('cookie-parser')
const app=express();
const port=3000;
const db=require("./config/mongoose");


app.use(cookieParser())
app.use(express.static("assets"));
app.use(express.urlencoded({extended:true}));
// use express router
app.use("/",require("./routes/index"));
// set up view engine
app.set("view engine","ejs");
app.set("views","./views");

app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
        return ;
    }

    console.log(`server is started on port: ${port}`);

});