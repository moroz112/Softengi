/**
 * Created by amoroz-prom on 23.05.15.
 */
"use strict";
var func = require('./func.js');
var __ = require('./node_modules/underscore/underscore.js');
 var _  = require('./node_modules/lodash');
//console.log(func.someFunction(3));

var arr = [
    {
        name: 'john',
        age: 108
    },
    {
        name:'Carl',
        age:19
    },
    {
        name: 'Carl',
        age: 13
    }
];

    _.each(arr,function(arrEl){
        _.each(arrEl, function(elParam){
            _.each(elParam,function(s){
                console.log(s);
            });
        });
    });

var arras = arr.filter(function(item){
   return item.name ==='Carl';
}).filter(function(item){
   return item.age<18;
});

_.filter(arr,function(item){
   return item.name ==='john';
});

arr.filter(function(item){
    return item.name==='john'
}).forEach(function(item){
    _.keys(item).forEach(function(k){
       console.log(k);
    });
});

//console.log(arras);