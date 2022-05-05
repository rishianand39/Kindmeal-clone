  
const express=require("express")
const app=express()
app.use(express.json())
const userController=require("./controllers/Auth.controller");



app.use("/auth",userController);



module.exports=app;