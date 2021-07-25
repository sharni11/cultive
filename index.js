// import or include statement for express
var express=require('express');
// create application 
var app= express();
// defining function that runs when someone access our site
app.get('/',function(req,res){
          res.sendFile(__dirname+'/frontend/html/index.html');
});
var port=process.env.PORT ||3000;
 
app.listen(port,function(){
       console.log("Port is listening");
});