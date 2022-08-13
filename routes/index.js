
const express=require("express");

const router=express.Router();
const homeController=require("../controllers/home_controller");
const postsController=require("../controllers/posts_controller");


router.get("/",homeController.home);
router.get("/action",postsController.action);

router.use("/users",require("./users"));

console.log("router added succesfully");

module.exports=router;