//Verifica si es Par o impar
function par(x){
    if (x%2===0){
        return "Es par";
    }
    else{
        return "Es impar";
    }
}

//Mostrar factorial

var result=1;
function factorial(z){
 for(var i=2; i<=z; i++){
    result*=i;
    
}
return result;

}



function cambio(str){
    var newcambio = str.replace(/-/g, "_");
    return newcambio;

}