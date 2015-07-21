/**
 * Created by aleksandrm on 7/21/15.
 */
function extendClass(Parent,Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.superclass = Parent.prototype;
    Child.prototype.constructor = Child;
}
function scriptClass(){
this.a = 'value from class';
}
scriptClass.prototype.tryModule = function tryModule(){
    console.log(this);
};
scriptClass.prototype.tryAnotherModule = function(){
    console.log(this.a);
    console.log(this);
};
scriptClass.prototype.mod = (function(){
    var basket = [];
    return {
        setBasket: function(item) {
            basket.push(item);
        },
        getBasket: function() {
            console.log('basket length', basket);
        }
    }
})();
function scriptClassChild() {

};
extendClass(scriptClass,scriptClassChild);
var example1 = new scriptClassChild();
example1.tryModule();
   var example = new scriptClass();
$(function(){
    $('.but').on('click', function(){
        example.mod.setBasket(example.a);
    });
    $('.but2').on('click',example.mod.getBasket);
});