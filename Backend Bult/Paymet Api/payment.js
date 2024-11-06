const razorpay = require("razorpay");


const razorpayInstance = new razorpay({
    key_id: 'rzp_test_mNfR7pKot0Dhiy',
    key_secret: 'M4opBFd2iuDQEWy2XtC7AsPN',
});

// Route to create a Razorpay order
// app.post("/create-order", async (req, res) => {
//     try {
//         const { amount, currency } = req.body;

//         const options = {
//             amount, // amount in paise
//             currency,
//         };

//         razorpayInstance.orders.create(options, (err, order) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).json({ error: 'Internal Server Error' });
//             } else {
//                 res.status(200).json(order);
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


module.exports.order = (req,res) => {
    try {
        const { amount, currency } = req.body;

        const options = {
            amount, // amount in paise
            currency,
        };

        razorpayInstance.orders.create(options, (err, order) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.status(200).json(order);
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

var crypto = require("crypto");


module.exports.verify=(req,res)=>{
    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

    var expectedSignature = crypto.createHmac('sha256', "M4opBFd2iuDQEWy2XtC7AsPN")
        .update(body.toString())
        .digest('hex');
    var response = { "signatureIsValid": "false" }
    if (expectedSignature === req.body.response.razorpay_signature)
        response = { "signatureIsValid": "true" }
    res.send(response);
}




