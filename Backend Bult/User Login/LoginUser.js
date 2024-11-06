const { default: mongoose } = require("mongoose");

const Loginuser=new mongoose.Schema({
    SellerName:String,
    Model:String,
    Price:Number,
    offerprice:Number,
    image1:String,
    image2:String,
    discription:String,
    categery:String,
    quantity:Number,
    loginGamil:String
})


module.exports=mongoose.model("LoginUser",Loginuser)