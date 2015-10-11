/**
 * Created by amoroz-prom on 11.10.15.
 */
$(function(){
    require(
        ['MainRouter','jquery','backbone'],
        function(Router,$,Backbone) {
            var router = new Router();
            Backbone.history.start();
        }
    );
});
