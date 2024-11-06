require("./Data Base/config")
const payment=require("./Paymet Api/payment")
const Cart=require('./Add Cart/addcart')
const Admin =require("./Admin Api/Admin")
const Signup=require("./User Login/Sign")
const OpenPdt=require("./Open Products/viewPdt")
const LoginUser = require("./User Login/LoginUser")



const express = require("express")
const app = express()
const port = 9000
const cors = require("cors")
const Orders = require("./Orders/Orders")


app.use(express.json({ limit: '50mb' }));


// const jwt = require("jsonwebtoken")
// const jwtKey = 'e-comm'


app.use(cors())
app.use(express.json())

//payemt api
app.post("/create-order",payment.order)
app.post("/verify",payment.verify)


app.get("/",Admin.AdminGet)
app.post("/",Admin.AdminPost)
app.delete("/deletefromadmin/:_id",Admin.AdminDel)
app.put("/editadmin/:_id",Admin.AdminUpdate)


//open product
app.get("/OpenProduct",OpenPdt.OpenGet)
app.post("/OpenProduct",OpenPdt.OpenPost)
app.delete("/closeproduct/:_id",OpenPdt.OpenDel)


//add to cart
app.get("/getaddtocart",Cart.GetCart)
app.post("/addtocart",Cart.AddCart)
app.delete("/deletecartdata/:_id",Cart.DeleteCart)
app.put("/updatemycart/:_id",Cart.UpdateCart)


//sign up api
app.get("/signupget",Signup.SignGet)
app.post("/signuppost",Signup.SignPost)


//login user
app.post("/loginuser", async (req, res) => {
    try {
        const response = new LoginUser(req.body)
        const result = await response.save()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})


//orders
app.post("/myorder", async (req, res) => {
    try {
        // Log received data
        const response = new Orders(req.body);
        const result = await response.save();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
});



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})