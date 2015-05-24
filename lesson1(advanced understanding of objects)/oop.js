/**
 * Created by amoroz-prom on 18.04.15.
 */
function Figure(color) {
    this.color = color || 'black';
}

Figure.prototype.setColor = function setColor(color){
    this.color = color;
    this.paint();
};
Figure.prototype.paint = function () {
    console.error('you must define method from children');
};

function Square(side, color){
    this.side = side || 10,
        Square.superclass.constructor.call(this, color);

    this.paint = function paint(){
      console.log('paint square with side', this.side);
    };

    this.setSide = function (newSide){
        this.side = newSide;
        this.paint();
    }
}

function Circle(radius, color){
    this.radius = radius;
    Circle.superclass.constructor.call(this,color);
    this.paint = function paint(){
        console.log('paint circle color ', this.color);
    };

    this.getColor = function(){
        return this.color;
    };

}

function extend(Child, Parent){
    var F = function F(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
};
extend(Circle, Figure);
var circle = new Circle();

function ParentObj() {
    //this.method1 = function() {
    //    console.log('method1 called from parent');
    //}
}
    ParentObj.prototype.method1 = function() {
        console.log('method1 called from parent');
    };

     function ChildObj() {
     this.method2 = function() {
         console.log('method2 called from child');
     }
 }
 //extend(ChildObj, ParentObj);

//var c = new ChildObj();
//var square = new Square();
//var circle = new Circle();
//
//
//square.setSide(30);
//circle.getColor();
//console.log(circle.getColor());
//circle.paint();
//circle.setColor('green');
//console.log(circle.getColor());