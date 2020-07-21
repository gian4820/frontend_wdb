console.log("CONECTADO");
var peliculas = [
 
    {
    nombre:"Rapido y Furioso 4",
    calificacion: 4,
    visto: false
    },

    {
    nombre:"El Padrino",
    calificacion: 5,
    visto: true
    },

    {
    nombre:"Segunda Guerra Mundial",
    calificacion: 2,
    visto: true
    }
]

for(var i=0; i < peliculas.length; i++ ){
   
    if (peliculas[i].visto){
        console.log("Usted SI vio la pelicula: " + peliculas[i].nombre + ", con una calificacion de: " + peliculas[i].calificacion + " puntos.");
    }
    else{
        console.log("Usted NO vio la pelicula: " + peliculas[i].nombre + ", con una calificacion de: " + peliculas[i].calificacion + " puntos.");

    }
}




