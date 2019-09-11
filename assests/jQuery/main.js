/* $("li").click(function(){
    if($(this).css("color")=== "rgb(128, 128, 128)")
    {
           $(this).css({
            color: "black",
            textDecoration: "none"
           });
    }
    else{  
        $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
}  
}); 
*/

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//delete item from list

$("ul").on("click" ,"span" ,function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if( event.which ===13 )
    {
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + text + "</li>");
        
    }
});
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});