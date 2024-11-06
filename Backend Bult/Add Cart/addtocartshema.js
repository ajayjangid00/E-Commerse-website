const { default: mongoose } = require("mongoose");

const AddtoCartSchema=new mongoose.Schema({
    _id: mongoose.Schema.Types.String,
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


module.exports=mongoose.model("AddtoCart",AddtoCartSchema)