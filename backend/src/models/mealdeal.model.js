
const mongoose=require("mongoose")

const MealDealSchema= new mongoose.Schema({
    img:{type:String,required:true},
    discount:{type:Number,required:true},
    avatar:{type:String,required:true},
    rating:{type:Number,required:true},
    restaurant:{type:String,required:true},
    title:{type:String,required:true},
    link:{type:String,},
    longtitle:{type:String,required:true,},
    details:{type:Array,required:true},
    location:{type:String,required:true},
        
},{
    timestamps:true,
    versionKey:false
})

module.exports=mongoose.model("MealDeal",MealDealSchema)