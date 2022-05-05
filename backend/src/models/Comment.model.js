
const mongoose=require("mongoose")

const CommentSchema= new mongoose.Schema({
    img:{type:String,required:true},
    desc:{type:String,required:true,},
    name:{type:String,required:true},
    avatar:{type:String,required:true},
    categories:{type:Array,required:true}    
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("Comment",CommentSchema)