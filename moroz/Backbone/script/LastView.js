/**
 * Created by AMoroz on 10/14/2015.
 */
define(
    'LastView',
    ['MainView','backbone','jquery','text!template/lastviewtemp.html'],
    function(Parent,Backbone,$,temp){
         return Parent.extend({
            tagName: 'div',
            className: 'lastview',
            template: _.template(temp)
        })
    }
);