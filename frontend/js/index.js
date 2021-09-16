

function logout(){
    localStorage.clear();
    location.reload();
}
console.log(localStorage.getItem("userDetails"))
if(localStorage.getItem("userDetails")){
    $("#login").css("display","none")
    $("#signup").css("display","none")
    $("#logout").css("display","inline")
 var a = JSON.parse(localStorage.getItem("userDetails"))
 console.log(a.name)
 $("#user").html("Hola, "+a.name)
}