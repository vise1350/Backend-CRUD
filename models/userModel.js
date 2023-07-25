const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[20,"name must be less tha 20 characters"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true
    }
})

module.exports=mongoose.model("User",userSchema)