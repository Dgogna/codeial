
const express=require("express");
const { appendFile } = require("fs");

const router=express.Router();
const homeController=require("../controllers/home_controller");


router.get("/",homeController.home);
router.use("/users",require("./users"));

console.log("router added succesfully");

module.exports=router;