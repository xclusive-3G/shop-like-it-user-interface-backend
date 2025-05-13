import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
    username:{
        type:String,
        default: 0,
        required:true
    },
    email:{
        type:String,
        default: 0,
        required:true
    },
    password:{
        type:String,
        default: 0,
        required:true
    },
})

const employeeModel = mongoose.model("register",registerSchema)
export default employeeModel