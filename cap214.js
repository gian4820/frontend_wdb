console.log("Conected");
//evento click del h1
$('h1').click(function () { 
    console.log("H1 clickeado");    
});

var texto;
//evento click del boton
$('button').click(function(){
    $(this).css("background", "blue");
    texto = $(this).text();
    console.log("Hice click en el "+ texto);
})

//evento keypress de las teclas del input

$('input').keypress(function (evento) { 
    //el metodo wich seleccioa la tecla del teclado, y el 13 es el codigo del enter
    if(evento.which === 13){
        alert("Apretaste enter");
    }
    console.log("Apretaste una tecla");
});
//este sirve, cuando pasas el puntero por arriba del h2
$('h2').on ("mouseenter", function(){
    $(this).css("color", "red");
})

//cuando sacas el puntero del h2
$('h2').on ("mouseleave", function(){
    $(this).css("color", "black");
})
let par = 0;
$('input').on("keypress", function(){
    
    if (par % 2===0){
        $(this).css("background","yellow");
        
    }
    else{
        $(this).css("background", "white");
        
    }
    par +=1;
})



