/**
 * Created by amoroz-prom on 13.08.15.
 */
var app = angular.module('app',[]);
app.controller('parent', function($scope){
    $scope.name = 'parent';
});
app.controller('child', function(){
    this.name = 'child';
    this.obj = [
        {name:'product1', price: '$411'},
        {name:'product2', price: '422$'},
        {name:'product3', price: '433'}
    ]


});
app.directive('foo', function(){
   return {
       link: function(scope,element,attrs) {
            element.text('this is my directive');
           console.log(scope.name)
       },
       template: '<p></p>'
   }
});
app.filter('moneyFilter',function(){
   return function(str){
       var lastChar = str.slice(-1),
           firstChar = str.slice(0,1),
           truePart;
       if(lastChar == '$') {
           truePart = str.slice(0,str.length -1);
       }
       else if(firstChar == '$') {
           truePart = str.slice(1);
       }
       else {
           truePart = str;
       }
       return '$' + truePart;
   }
});