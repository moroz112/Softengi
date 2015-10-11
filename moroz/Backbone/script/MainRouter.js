/**
 * Created by amoroz-prom on 11.10.15.
 */
define(
    'MainRouter',
    ['MainView','jquery','backbone'],
    function(View,$,Backbone) {
        return Backbone.Router.extend({

            routes: {
                "" : "firstPage",
                "second" : "secondPage",
                "last" : "lastPage"
            },
            firstPage: function () {

            },
            secondPage: function () {

            },
            lastPage: function () {

            }
        });
    }
);