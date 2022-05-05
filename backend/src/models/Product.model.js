const mongoose=require("mongoose")

const ProductSchema= new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true,},
    img:{type:String,required:true},
    categories:{type:Array,required:true},
    discount:{type:String,required:true}

},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("Product",ProductSchema)