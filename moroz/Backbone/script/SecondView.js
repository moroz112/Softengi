/**
 * Created by AMoroz on 10/14/2015.
 */
define(
    'SecondView',
    ['MainView','backbone','jquery','text!template/secondviewtemp.html'],
    function(Parent,Backbone,$,temp) {
        return Parent.extend({
            tagName: 'div',
            classname: 'secondview',
            template: _.template(temp)
        })
    }
);