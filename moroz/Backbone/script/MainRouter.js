
define(
    ['views/MainView','jquery','backbone','views/FirstView','views/SecondView','views/LastView', "collection/MainCollection"],
    function(View,$,Backbone,First,Second,Last, Collection) {
        return Backbone.Router.extend({

            routes: {
                "" : "firstPage",
                "second" : "secondPage",
                "second/:kyghkuy" : "secondPage",
                "last" : "lastPage"
            },

            secondCollection: new Collection(),

            firstPage: function () {
                this.firstview = new First();
            },
            secondPage: function (modelID) {
                //var model = this.secondCollection.get(modelID) || this.secondCollection.create();
                this.secondCollection.model();
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