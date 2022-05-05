  
const express=require("express")
const app=express()
app.use(express.json())
const userController=require("./controllers/Auth.controller");
const hotpickController=require("./controllers/Hotpick.controller")
const commentController=require("./controllers/Comment.controller")
const KindMomentController=require("./controllers/Kindmoment.controller")

app.use("/auth",userController);
app.use("/hotpick",hotpickController)
app.use("/comment",commentController)
app.use("/kindmoment",KindMomentController)


module.exports=app;