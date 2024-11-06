const OpenProduct = require("./OpenProduct")


module.exports.OpenGet=async(req,res)=>{
    try {
        const response = await OpenProduct.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

module.exports.OpenPost=async(req,res)=>{
    try {

        const response = new OpenProduct(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}



module.exports.OpenDel=async(req,res)=>{
    try {
        const response = await OpenProduct.deleteMany(req.params)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}

