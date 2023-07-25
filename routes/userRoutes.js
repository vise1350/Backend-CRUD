const express=require("express");

const {home,createUser,getUsers,deleteUser}=require("../controlers/userControler.js")





const router=express.Router();

router.get("/",home)
router.post("/createuser",createUser)
router.get("/getusers",getUsers)
router.delete("/deleteuser/:id",deleteUser)
router.put("./edituser/:id".editUser)

module.exports=router