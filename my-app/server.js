const express = require("express");
const cars = require("cars");
const stripe = require("stripe")("sk_test_51GxzqLLqDyTOcUBAfe0FbidOpp4fnkohHojlvzyJTjLewQ9MzfQ5zcyyqBewSoYNTO9GaFQpGA4kJQXZ0dpF9ZkY00LKpk35si")
const {v4: uuidv4} = require('uuid');
const app = express();
app.use(cars());
app.use(express.json());
app.get("/", (req,res) => {
res.sent("Welcome into react shop website");
});
app.post("/checkout", async (req,res)=>{
    let error;
    let status;
    try{
     const{product, token} = req.body;
     const customer = await stripe.customers.create({
         email: token.email,
         source: token.id
     })
     const key = uuidv4();
     const charge = await stripe.charge.create({
         amount: product.price * 100,
         currency: "usd",
         receipt_email:token.email,
         description:'all product description',
         shipping:{
             name: token.cart.name,
             address: {
             line1:token.card.address_line1,
             line2:token.card.address_line2,
             city: token.card.address_city,
             country:token.card.address_country,
             postal_code: token.card.address_zip
            }
         }
     },
     {idempotencyKey: key})
     status = "success"
    }catch(error){
        console.log(error);
        status= "error";
    }
    res.json({status});
});
app.listen(8080, () => {
console.log("your app is running on part number 8080");
});