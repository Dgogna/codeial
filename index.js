
const express=require("express");
var cookieParser = require('cookie-parser')
const app=express();
const port=3000;
const db=require("./config/mongoose");
// user for the session cookie for the authentication

const session=require("express-session");
const passport=require("passport");
const passportLocal=require("./config/passport-local-strategy");


app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.static("assets"));


// set up view engine
app.set("view engine","ejs");
app.set("views","./views");


app.use(session({
    name:"codeial",
    // todo later when we set up this thing in the production
    secret:"blasomething",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());
// use express router
app.use("/",require("./routes/index"));

app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
        return ;
    }

    console.log(`server is started on port: ${port}`);

});