/**
 * Created by amoroz-prom on 13.08.15.
 */
var app = angular.module('app',[]);
app.controller('parent', function($scope){
    $scope.name = 'parent';
});
app.controller('child', function(){
    this.name = 'child';
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