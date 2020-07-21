console.log("CONNECTED");
var one = 0;
var two = 0;
var valor = 5;
var gameover = false;

//modificacion de numeros en p
var puntos = document.getElementById("points");
//puntos h2 jugador1
var score1 = document.getElementById("s1");
//puntos h2 jugador2
var score2 = document.getElementById("s2");

//boton jugador1
var jugador1 = document.getElementById("j1");
//boton jugador2
var jugador2 = document.getElementById("j2");
//boton reset
var breset = document.getElementById("reset");
//input
var entrada = document.getElementById("e");

//tomar valores en textbox
entrada.addEventListener("change", function(){
    puntos.innerHTML =  entrada.value;
    valor = entrada.value;
})

jugador1.addEventListener("click", function(){
if(!gameover){
    if (one>-1 && one<valor) {
        one++;
        score1.innerHTML = one;
    }

    else {
        score1.style.color="blue";
        alert("Jugador 1, GANO!")  
        gameover = true;
    }
}
})


jugador2.addEventListener("click", function(){
if(!gameover){
    if(two>-1 && two<valor){
        two++;
        score2.innerHTML= two;
    }

    else {
        score2.style.color="red";
        alert("Jugador 2, GANO!")  
        gameover=true;         
    }
}
})

//---------------------------------------------------------

breset.addEventListener("click", function(){
    alert("Vuelve a 0")
    cero();
})

//----------------------------------------------------------

function cero(){
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    one = 0;
    two = 0;
    score1.style.color="black";
    score2.style.color="black";
    gameover=false;
    entrada.value=points;
    
}