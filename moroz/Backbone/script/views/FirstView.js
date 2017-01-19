/**
 * Created by AMoroz on 10/14/2015.
 */
define(
    ['views/MainView','backbone','jquery','text!template/firstviewtemp.html'],
    function(Parent,Backbone,$,temp) {
        return Parent.extend({
            tagName: 'div',
            classname: 'first-vew',
            template: _.template(temp),
            initialize: function() {
                console.log('first view created');
                this.render();
            },
            render: function() {
                $(this.el).html(this.template);
                $('#app-content').html(this.el);
            }
        })
    }
)