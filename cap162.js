console.log("CONECTED");
var listado = ["Perro salvaje"];
var op = prompt("Ingrese una opcion");

while(op !== "salir"){

    if(op === "nuevo"){
       nuevoelemento();
    }

    else if(op === "listar"){
        listarelemento();
    }

    else if(op ==="borrar"){
        borrarelemento();
    }

    op = prompt("Que desea hacer?");
    }

   function nuevoelemento(){
    var ing = prompt("Ingrese un nuevo elemento");
    listado.push(ing);
   }
    
    function listarelemento(){
        console.log("***********");
        for(var i=0; i < listado.length; i++){
            console.log(i + ": " + listado[i]);   
        }
        console.log("***********");
    }

    function borrarelemento(){
        var del = prompt ("Ingrese el valor de Index, que desea borrar");
        listado.splice(del,1);
        //en la linea de arriba te borra un elemento, del index del ingresado
    }

alert("Usted salio de la app");