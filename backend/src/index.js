  
const express=require("express")
const app=express()
app.use(express.json())
const authController=require("./controllers/Auth.controller")

// REGISTER LOGIN
app.use("/auth",authController);



module.exports=app;