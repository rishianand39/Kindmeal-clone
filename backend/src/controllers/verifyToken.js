
const jwt=require("jsonwebtoken")
require('dotenv').config()

const verifyToken=(req,res,next)=>{

    const authHeader=req.headers.token;
    if(authHeader){
        const token=authHeader.trim().split(" ")[1]
        // console.log(token)
        jwt.verify(token,process.env.CRYPTO_SECRET,(err,user)=>{
            if(err) return res.status(403).json("Token is not valid")
            req.user=user;
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }

}
const verifyTokenAuthorization=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.idAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do that!")
        }
    });
}

module.exports={verifyToken,verifyTokenAuthorization,verifyTokenAndAdmin}