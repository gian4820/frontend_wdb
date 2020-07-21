console.log("CONNECTED!");
//lo hace desaparecer
$('#bfo').on ("click", function(){
    $('#dfo').fadeOut(1000), function(){

    };
})

//aparece, desaparece
$('#bft').on("click", function(){
    $('#dft').fadeToggle(1000, function(){
        
    });
});

//Slidedown
    $('#bsd').on("click", function(){
        $('#dsd').slideDown();
     
    })



//Slideup
$('#bsu').on("click", function(){
    $('#dsu').slideUp();
})



//Slidetoggle
$('#bst').on("click", function(){
    $('#dst').slideToggle();
})