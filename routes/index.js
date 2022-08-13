
const express=require("express");

const router=express.Router();
const homeController=require("../controllers/home_controller");
// const userController=require("../controllers/users_controller");


router.get("/",homeController.home);
// router.get("/action",userController.post);

router.use("/users",require("./users"));

console.log("router added succesfully");

module.exports=router;