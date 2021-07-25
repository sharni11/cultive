// import or include statement for express
var express=require('express');
// create application 
var app= express();
// defining function that runs when someone access our site
app.get('/',function(req,res){
          res.sendFile(__dirname+'/frontend/html/index.html');
});
//tell express where html,css,js files are
app.use(express.static(__dirname+'/frontend'));
var port=process.env.PORT ||3000;
 
app.listen(port,function(){
       console.log("Port is listening");
});