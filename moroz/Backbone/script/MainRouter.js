/**
 * Created by amoroz-prom on 11.10.15.
 */
define(
    'MainRouter',
    ['MainView','jquery','backbone','FirstView','SecondView','LastView'],
    function(View,$,Backbone,First,Second,Last) {
        return Backbone.Router.extend({

            routes: {
                "" : "firstPage",
                "second" : "secondPage",
                "last" : "lastPage"
            },
            firstPage: function () {
                this.firstview = new First();
            },
            secondPage: function () {
                this.secondview = new Second();
                this.secondview.render();
            },
            lastPage: function () {
                this.lastview = new Last();
                this.lastview.render();
            }
        });
    }
);