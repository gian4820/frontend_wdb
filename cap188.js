console.log("CONNECTED");
var boton = document.getElementsByTagName("button");
blanco= true;
this.addEventListener("click", function(){
if(blanco){
        this.document.body.style.backgroundColor="blue";
        
     
}
else{
        this.document.body.style.backgroundColor="red";
          
}
blanco = !blanco;
}) 