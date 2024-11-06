const SignUpSchema = require("./Signup")



module.exports.SignGet=async(req,res)=>{
    try {
        const response = await SignUpSchema.find()
        res.send(response)
    } catch (error) {
        console.log(error)
    }
}


module.exports.SignPost=async(req,res)=>{
    try {
        const response = new SignUpSchema(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

