//Ejercicio Par
function par (x){
    if (x%2==0){
        console.log("Es par");
    }
    else{
        console.log("Es impar");
    }
}

//Ejercicio de Factorial
var result = 1;
function factorial(z){
    if (z>=0){
    for(var i=1; i<=z; i++){
        result*=i;
    }
    
    }
    
    else{
        console.log("Ingrese un numero mayor a 0");
    }
    return result;
}

//Ejercicio reemplazar guion por guion bajo.

function guion(palabra){

var reem = palabra.replace(/-/g , "_");
return reem;

}