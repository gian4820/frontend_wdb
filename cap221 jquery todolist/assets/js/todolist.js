console.log("CONNECTED");

//selecciona los li y los pone color gris, y negro
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

//el evento on se utiliza en lugar de click, porque al añadir
//nuevos elementos en el todolist, los nuevos no te los deja borrar
//elimina li al seleccionar la X
$('ul').on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
})

//Cuando apretas enter, agrega el elemento nuevo a la lista
$("input").keypress(function(e){ 
    
    if(e.which===13){
        //graba nuevo elemento en li
        var nuevo = $(this).val();
        $(this).val("");
        //crear un nuevo li
        $("ul").append("<li><span><i class='fas fa-trash'></i> </span>" + " " +  nuevo + "</li>");
    }
});

//Aparecer y desaparecer el +
$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
})

