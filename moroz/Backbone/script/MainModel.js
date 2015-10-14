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
                    ID: '',
                    name: 'MainModel'
                },
                idAttribute: 'ID',
                initialize: function() {
                    console.log('main model has been initialize');
                    this.on('invalid', function(model,error) {
                        console.log('aaaaaaa' + error);
                    })
                },
                validate: function(attr) {
                    if(attr.ID <=0) {
                        return 'Invalid value';
                    }
                }
            }
        )
    }
);