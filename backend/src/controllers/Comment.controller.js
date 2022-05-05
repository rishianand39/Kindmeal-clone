
const router=require("express").Router();


const Comment=require("../models/Comment.model")

const { verifyToken,verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE COMMENT

router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newComment=new Comment(req.body);
    try {
        const savedComment=await newComment.save();
        return res.status(200).json(savedComment)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})



// GET ALL COMMENT
router.get("/",async(req,res)=>{
     const qNew=req.query.new;
     const qCategory=req.query.category;

    try {

        let comments;
        if(qNew){
            comments=await Product.find().sort({createdAt: -1}).limit(5)
        }else if(qCategory){
            comments=await Product.find({categories:{
                $in:[qCategory],
               },
            })
        }else{
            comments=await Product.find();
        }
      
        return res.status(200).json(comments)

    } catch (error) {
        return res.status(500).json(error)   
    }
});





module.exports=router;