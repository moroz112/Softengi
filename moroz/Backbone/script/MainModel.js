/**
 * Created by amoroz-prom on 11.10.15.
 */
define(
    'MainModel',
    ['jquery','backbone'],
    function($,Backbone) {
        return Backbone.Model.extend(
            {
                defaults: {
                    name: 'MainModel'
                },
                initialize: function() {
                    console.log('main model has been initialize');
                }
            }
        )
    }
);