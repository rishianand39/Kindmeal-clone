
const router=require("express").Router();
const User=require("../models/User.model")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")
require('dotenv').config()

//Router


router.post("/register",async(req,res)=>{
    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        re_enter_email:req.body.re_enter_email,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.CRYPTO_SECRET).toString(),
        username:req.body.username,
        birth:req.body.birth,
        country:req.body.country,
        state:req.body.state,
        gender:req.body.gender,
        profile_photo:req.body.profile_photo,

    })
    try {
        const savedUser=await newUser.save();
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post("/login",async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});

        if(!user){
            return res.status(401).json("wrong credential")
        }

        const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.CRYPTO_SECRET);

        
        const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8)

        if(originalPassword!==req.body.password){
            return res.status(401).json("wrong credential")
        }

        const accessToken=jwt.sign({
            id:user._id,
            isAdmin:user.isAdmin
        },process.env.CRYPTO_SECRET,{expiresIn:"3d"})
        
        const {password, ...others}=user._doc;
       
        return res.status(200).json({...others,accessToken})

    } catch (error) {
      return res.status(500).json(error)  
    }
});


module.exports=router;