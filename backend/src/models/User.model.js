
const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    re_enter_email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    username:{type:String,required:true,unique:true},
    birth:{type:String,required:true},
    country:{type:String,required:true},
    state:{type:String,required:true},
    gender:{type:String,required:true},
    profile_photo:{type:String,required:true},
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("User",userSchema)