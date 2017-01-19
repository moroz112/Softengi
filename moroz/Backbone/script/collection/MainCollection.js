/**
 * Created by AMoroz on 10/19/2015.
 */
define(
    ['jquery','backbone','model/MainModel'],
    function($,Backbone,Main) {
        return Backbone.Collection.extend({
            model:Main
        })
    }
);