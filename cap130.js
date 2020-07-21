alert("Conectado a JS");
var adivina = 3;
var num = prompt("Adivine el numero entre 0 y 10");
if (adivina == Number(num)){
    alert ("Numero encontrado " + adivina)
} 
else if (adivina < Number(num)){
    alert("Es un numero menor")
}

else{
    alert("Es un numero Mayor")
}