import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unuqie:true
    },
    fullName:{
       type:String,
       required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmpassword:{
        type:String,
    }
})

export default mongoose.model("User", userSchema)
