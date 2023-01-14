$(document).ready(function(){
    $(window).on("scroll", function(){
        $(".fade-in").each(function(){
            /* Check if the element is in view */
            if(isInView($(this))){
                /* Add the in-view class */
                $(this).addClass("in-view");
            }
        });
    });
});

/* Function to check if an element is in view */
function isInView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
