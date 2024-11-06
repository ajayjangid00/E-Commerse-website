const { default: mongoose } = require("mongoose");

const ProductSchema=new mongoose.Schema({
    SellerName:String,
    Model:String,
    Price:Number,
    offerprice:Number,
    image1:String,
    image2:String,
    discription:String,
    categery:String,
    quantity:Number
})


module.exports=mongoose.model("Prodcuts-List",ProductSchema)