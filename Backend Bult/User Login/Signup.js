const { default: mongoose } = require("mongoose");

const SignUpSchema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:Number
})


module.exports=mongoose.model("Sign-up-user",SignUpSchema)