// import or include statement for express
var express=require('express');
// create application 
var app= express();
const dbURI = process.env.dbURI||"mongodb+srv://HAnWNJS3Mj7U5oem:pedhu@cluster0.flgd8.mongodb.net/cultive?retryWrites=true&w=majority";
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname+'/frontend'));
const Razorpay=require("razorpay");

const razorpay=new Razorpay({
    key_id:"rzp_test_QJ6Y7G3p1zOqrc",
    key_secret:"L4hBgXCAhj5bviskr9OV5A2m"

});
mongoose
    .connect(dbURI, {
        useNewUrlParser: true,
      
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
  

// defining function that runs when someone access our site
app.get('/',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/index.html');
});
app.get('/register',function(req,res){
       // when someone opens our page open this html page 
       res.sendFile(__dirname+'/frontend/html/register.html');
});
app.get('/login',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/login.html');
});
app.get('/buy',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/buy.html');
});
app.get('/workshop',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/workshop.html');
});
app.get('/learn',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/learn.html');
});
app.get('/document1',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document1.html');
});
app.get('/document2',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document2.html');
});
app.get('/document3',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document3.html');
});
app.get('/document4',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document4.html');
});
app.get('/document5',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document5.html');
});
app.get('/document6',function(req,res){
       // when someone opens our page open this html page 
          res.sendFile(__dirname+'/frontend/html/document6.html');
});
app.use("/api", require("./backend/api/user.js"));
//tell express where html,css,js files are
app.post("/order",(req,res)=>
{
    var options = {
        amount: 100,  
        currency: "INR"
      };
      razorpay.orders.create(options, function(err, order) {
        console.log(order,err);
        res.json(order);
      });
})

app.post("/is-order-complete",(req, res)=>
{
    razorpay.payments.fetch(req.body.razorpay_payment_id).then((doc)=> {
        if(doc.status=="captured"){
            res.send("Payment Successful!!")
        }
        else
        res.redirect("/");
    })
})
var port=process.env.PORT ||3000;
 
app.listen(port,function(){
       console.log("Port is listening");
});
