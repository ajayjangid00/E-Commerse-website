const ProductSchema = require("./schema")



module.exports.AdminGet=async(req,res)=>{
    try {
        const response = await ProductSchema.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports.AdminPost=async(req,res)=>{
    try {
        const response = new ProductSchema(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports.AdminDel=async(req,res)=>{
    try {
        const response = await ProductSchema.deleteOne(req.params)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports.AdminUpdate=async(req,res)=>{
    try {
        const response = await ProductSchema.updateOne(req.params, { $set: req.body })
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

