  
const express=require("express")
const app=express()
app.use(express.json())
const userController=require("./controllers/Auth.controller");
const hotpickController=require("./controllers/Hotpick.controller")


app.use("/auth",userController);
app.use("/hotpick",hotpickController)


module.exports=app;