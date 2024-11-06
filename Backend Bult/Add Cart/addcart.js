const AddtoCartSchema = require("./addtocartshema")

module.exports.AddCart=async(req,res)=>{
    try {
        const response = new AddtoCartSchema(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}


module.exports.GetCart=async(req,res)=>{
    try {
        const response = await AddtoCartSchema.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}


module.exports.DeleteCart= async(req,res)=>{
    try {
        const response = await AddtoCartSchema.deleteMany(req.params)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}



module.exports.UpdateCart=async(req,res)=>{
    try {
        const response = await AddtoCartSchema.updateOne(req.params, { $set: req.body })
        res.send(response)
    } catch (error) {
        console.log(error)
    }    
}
