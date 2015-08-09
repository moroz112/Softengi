/**
 * Created by amoroz-prom on 09.08.15.
 */
$(function(){

    $.fn.ownSlider = function(options) {
        options = $.extend({
            quantity: 2,
            delay: 2000
        }, options);
        var items = $('.slider .slider-item');
        items.css({
            "display":"none"
        });
        for(var i =0;i<options.quantity;i++) {
            $(items.get(i)).fadeIn();
            $(items.get(i)).addClass('visible');
            console.log($(items.get(i)));
        }
        //for(var j = 0;j<items.length; j++) {
        //    if($(items.get(j)).hasClass('visible')) {
        //        (function (i) {
        //            setTimeout(function () {
        //                $(items.get(i)).removeClass('visible');
        //                $(items.get(i + options.quantity)).addClass('visible');
        //                $(items.get(i)).fadeOut();
        //                $(items.get(i + options.quantity)).fadeIn();
        //            }, options.delay);
        //        }(j));
        //    }
        //}
        items.each(function(){
            (function(){
               setTimeout(function(){
                   console.log($(this));
               },2000);
            }());
        });
    };
});