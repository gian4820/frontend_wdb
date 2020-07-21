window.setTimeout(function() {

console.log("Conectado");

var listado = [];
var agr;
var op;

op= prompt("Ingrese una opcion")


while(op != "salir"){
    if(op == "agregar"){
        agr=prompt("Ingrese un dato");
        listado = agr.push;
    }

    else if(op=="listar"){
        console.log(listado);
    }

    else{
        console.log("Ingreso una opcion incorrecta");
    }

    console.log("usted salio del programa");
}




    // put all of your JS code from the lecture here
  }, 500);