console.log("CONNECTED");
//cantidad de cuadrados
var cantCuadrados=6;
var colors = generateRandomColors(cantCuadrados);
// Selecciona el color
var color_seleccionado = aleatorio();
//Selecciona variable para mostrar RGB
var displayrgb = document.getElementById("rgbdisplay");
//Selecciona variable para los cuadrados
var cuadrados = document.querySelectorAll(".colores");
//Selecciona variable para mostrar Correcto, o Incorrecto en menu
var display = document.getElementById("display");
//Selecciona el h1 del titulo principal
var titulo = document.querySelector("h1");
//Selecciona boton reset
var reset = document.querySelector("#reset");
//Seleccion boton simple
var simple = document.querySelector("#simple");
//Seleccion boton hard
var hard = document.querySelector("#hard");

//------------------------------------------------------------------------

//seleccion boton simple
simple.addEventListener("click", function(){
    simple.classList.add("selected");
    hard.classList.remove("selected");
    titulo.style.backgroundColor="rgb(54, 137, 231)";
    cantCuadrados=3;
    colors = generateRandomColors(cantCuadrados);
    color_seleccionado = aleatorio();
    displayrgb.textContent = color_seleccionado;

    for(var i=0; i<cuadrados.length; i++){
        if(colors[i]){
            cuadrados[i].style.backgroundColor = colors[i];
        } else{
            cuadrados[i].style.display = "none";
        }
    }

})

//seleccion boton hard
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    simple.classList.remove("selected");
    titulo.style.backgroundColor="rgb(54, 137, 231)";
    cantCuadrados=6;
    colors = generateRandomColors(cantCuadrados);
    color_seleccionado = aleatorio();
    displayrgb.textContent = color_seleccionado;

    for(var i=0; i<cuadrados.length; i++){
        cuadrados[i].style.backgroundColor = colors[i];
        cuadrados[i].style.display="block";
       
    }
})

//------------------------------------------------------------------------

//Boton reset
reset.addEventListener("click", function(){
    reset.textContent = "Cambiar Colores";
    titulo.style.backgroundColor="rgb(54, 137, 231)";
    display.textContent ="";
    //Genera nuevos colores
    colors = generateRandomColors(cantCuadrados);
    //selecciona nuevos random de colores del array
    color_seleccionado = aleatorio();
    //cambiamos el display RGB del color seleccionado
    displayrgb.textContent = color_seleccionado
    //recorre array para colocar nuevos colores en la grilla
    for (var i = 0; i < cuadrados.length; i++) {
        cuadrados[i].style.backgroundColor = colors[i];
    }
})

//------------------------------------------------------------------------

//Muestra en HTML el codigo de color en el H1
displayrgb.textContent = color_seleccionado;

//------------------------------------------------------------------------

//Comparacion de los colores
for (var i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colors[i];

  cuadrados[i].addEventListener("click", function () {
    var seleccionColor = this.style.backgroundColor;
    if (seleccionColor === color_seleccionado) {
      display.textContent = "CORRECTO";
      display.style.color = seleccionColor;
      titulo.style.backgroundColor = seleccionColor;
      reset.textContent = "Jugar de nuevo?";

      changecolor(seleccionColor);
    } else {
    
      this.style.backgroundColor = "rgb(23, 23, 23)";
      display.textContent = "INCORRECTO";
      display.style.color = "red";
    }
  });
}

//------------------------------------------------------------------------

//Funcion para poner color correcto en todos los cuadrados!
function changecolor(seleccionColor) {
  //recorremos el array
  for (var i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = seleccionColor;
  }
}

//------------------------------------------------------------------------

//Funcion Random, para seleccionar el color aleatorio
function aleatorio() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//------------------------------------------------------------------------

//Crea el array de los distintos tipos de colores, creador por el Random de abajo
function generateRandomColors(num) {
  //creamos el array
  var arr = [];
  //recorremos el array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

//------------------------------------------------------------------------

//genera el random de colores para cada variable distina R G B
function randomColor() {
  //random red
  var r = Math.floor(Math.random() * 256);
  //random green
  var g = Math.floor(Math.random() * 256);
  //random blue
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}
