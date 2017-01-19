/**
 * Created by AMoroz on 10/14/2015.
 */
define(
    ['views/MainView','backbone','jquery','text!template/secondviewtemp.html','model/MainModel'],
    function(Parent,Backbone,$,temp, Model) {
        return Parent.extend({
            tagName: 'div',
            classname: 'secondview',
            template: _.template(temp),
            initialize: function() {
                //this.model = new Model();
                //this.model.set("ID",-1);
                //this.model.isValid();
                console.log('result',this.result);
            }
        })
    }
);