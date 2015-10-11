/**
 * Created by amoroz-prom on 11.10.15.
 */
define(
    'MainView',
    ['jquery','backbone','MainModel','text!template/temp.html'],
    function($,Backbone,Model,temp) {
        return Backbone.View.extend({
            tagname: 'div',
            className: 'first-view',
            events: {
            "click .button": "change"
            },
            template: _.template(temp),
            obj: {
                olo: 'Main content'
            },
            initialize: function() {
                console.log('view created');
                this.render();
            },
            change: function(){
              console.log('event from view works');
            },
            render: function() {
                $(this.el).html(this.template(this.obj));
                $('#app-content').html(this.el);
            }
        })
    }
);