window.setTimeout(function() {
// put all of your JS code from the lecture here

var op = prompt("Ingrese una opcion");
var datos = [];
var ing;
while(op!== "salir"){
           
    if (op==="nuevo"){
        datos.push(ing = prompt("Ingrese un dato"));
    }
    
    else if(op === "listar"){
        console.log(datos);
    }
     
    else {
        console.error("Opcion invalida");
    }
    
    var op = prompt("Ingrese una opcion");
} 

console.log("Salio del programa");
}, 500);