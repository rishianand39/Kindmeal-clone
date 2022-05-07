
const mongoose=require("mongoose")

const HotPickSchema= new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true,unique:true},
    desc:{type:String,required:true,},
    categories:{type:Array,required:true},
    discount:{type:Number,required:true},
    price:{type:Number,required:true},
    location:{type:String,required:true},
    ingredient:{type:Array,required:true},
    rating:{type:Number,},
    details:{type:String,},    
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("HotPick",HotPickSchema)