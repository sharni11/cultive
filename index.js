// import or include statement for express
var express=require('express');
// create application 
var app= express();
app.get('/',function(req,res){
          res.send("Hello Welcome to Cultive");
});
var port=process.env.PORT ||3000;
 
app.listen(port,function(){
       console.log("Port is listening");
});