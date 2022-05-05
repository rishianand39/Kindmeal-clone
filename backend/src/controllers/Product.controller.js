
const router=require("express").Router();


const Product = require("../models/Product.model");
const { verifyToken,verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

// CREATE PRODUCT
router.post("/",verifyTokenAndAdmin,async(req,res)=>{
    const newProduct=new Product(req.body);
    try {
        const savedProduct=await newProduct.save();
        return res.status(200).json(savedProduct)
        
    } catch (error) {
        return res.status(500).json(error)
    }
})

// // UPDATE PRODUCT
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try {
        const updatedProduct = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
       return res.status(200).json(updatedProduct);
    } catch (err) {
       return res.status(500).json(err);
    }
   
});

// DELETE PRODUCT
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);

       return res.status(200).json("Product has been deleted...")
    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET PRODUCT
router.get("/find/:id",async(req,res)=>{
    try {
        const product= await User.findById(req.params.id);

        return res.status(200).json(product)

    } catch (error) {
        return res.status(500).json(error)   
    }
});

// GET ALL PRODUCT
router.get("/",async(req,res)=>{
     const qNew=req.query.new;
     const qCategory=req.query.category;

    try {

        let products;
        if(qNew){
            products=await Product.find().sort({createdAt: -1}).limit(5)
        }else if(qCategory){
            products=await Product.find({categories:{
                $in:[qCategory],
               },
            })
        }else{
            products=await Product.find();
        }
      
        return res.status(200).json(products)

    } catch (error) {
        return res.status(500).json(error)   
    }
});





module.exports=router;