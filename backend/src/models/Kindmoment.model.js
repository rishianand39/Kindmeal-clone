
const mongoose=require("mongoose")

const KinkMomentSchema= new mongoose.Schema({
    img:{type:String,required:true},
    avatar:{type:String,required:true},
    username:{type:String,required:true},
    title:{type:String,},
    link:{type:String,},
    desc:{type:Array,required:true,},
     
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("KinkMoment",KinkMomentSchema)