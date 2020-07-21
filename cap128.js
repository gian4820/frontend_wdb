var age = prompt("Ingrese su edad");
console.log("Usted tiene " + age + " años.");

if (age<0){
    console.log(" ERROR! Ingrese una edad correcta");
}

else if (age === "21") {
        console.log("Feliz Cumpleaños");
}

else if (age%2 !=0 ) { 
    console.log("Es impar")
}



