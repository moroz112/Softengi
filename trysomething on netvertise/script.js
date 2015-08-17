$(function(){
    $("img.lazy").lazyload({
        event : "sporty"
    });
    $(window).bind("load", function() {
         setTimeout(function() {
            $("img.lazy").trigger("sporty")
        }, 5000);
    });

});