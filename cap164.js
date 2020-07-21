window.setTimeout(function() {

console.log("CONNECTED");

console.log("***Muestra Array al reves***");
function reves(arr){
    for(var i=arr.length -1; i>=0;i--){
        console.log(arr[i]);
    }
}
reves([1,2,3,4,5])


console.log("***Dice si son todos los elementos iguales en el array***");

var numeros =0;

function iguales(arr2){
    var primero = arr2[0];
    for(var x=1; x<arr2.length; x++){
        if(arr2[x] !== primero){
            numeros++;
        }
    }
    if(numeros>0){
        console.log("El array NO es uniforme");
    }
    else{
        console.log("El array SI es uniforme");
    }
        
}
iguales([1,1,1,3,1]);

console.log ("***Suma todos los elementos del Array***");
var sumados=0;
function suma (arr3){
    for(var z=0; z<arr3.length; z++){
        sumados= (sumados + arr3[z]) ;
    }
    console.log("La suma de todos los elementos del array es: " + sumados);
}

suma([5,2,1,9,7,2,100]);


console.log("***Cual es el elemento Mayor del Array***");

function may (arr4){
    var mayor= arr4[0];
    for(var y=1; y<arr4.length; y++){
        if (arr4[y]> mayor){
            mayor = arr4[y];
        }

    }
    console.log("El mayor es: "+ mayor);
}

may ([3,9,4,7,54,1]);



}, 500);