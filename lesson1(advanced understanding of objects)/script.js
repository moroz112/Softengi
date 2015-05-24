/**
 * Created by amoroz-prom on 18.04.15.
 */
/*defineProperty and defineProperties start*/

var square = {
    area: 10,
    side: 25
};
//Object.defineProperty(square, 'side', {
//        value: '10',
//        writable: false,
//        enumerable: true
//    });
//Object.defineProperty(square, 'area', {
//    configurable: false
//});
//
//for(var key in square){
//    console.log(key);
//}
//
//
//console.log(square.side);
//square.side = 20;
//console.log(square.side);
//
//delete square.side;  /*при writable: false - удаление тоже  не сработает*/
//console.log(square.side);


//Object.defineProperties(square,{
//   side: {
//       value: 10,
//       writable: true,
//       configurable: true,
//       enumerable: true
//   },
//    area:{
//        get:function(){
//          return this.side*this.side;
//        },
//        set: function (newArea) {
//            this.side = Math.sqrt(newArea);
//        },
//        configurable: true,
//        enumerable: true
//    }
//});
console.log(Object.keys(square));
console.log(square.area);
console.log(square.side);
square.area = 900;
square.side = 20;
console.log(square.area);
console.log(square.side);
Object.freeze(square);
square.area = 700;
square.side = 80;
console.log(square.area);
console.log(square.side);
console.log(JSON.stringify(square));
var k = JSON.stringify(square);
console.log(k);
console.log(JSON.parse(k));

console.log('start another oop');


//for(var key in square){
//    console.log(key);
//}
//console.log(square.area);
//square.area = 200;
//console.log(square.area);
//console.log(square.side);


/*end*/