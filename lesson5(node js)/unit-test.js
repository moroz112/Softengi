/**
 * Created by amoroz-prom on 23.05.15.
 */
"use strict";

var jasmineRequire = require("./libs/jasmine/jasmine-core"),
    jasmineCore = jasmineRequire.core(jasmineRequire),
    util = require("util"),
    jasmine = jasmineCore.getEnv();
    global.jasmine = jasmine;
    global.describe = jasmine.describe.bind(jasmine);
    global.expect = jasmine.expect.bind(jasmine);
    global.it = jasmine.it.bind(jasmine);


var consoleReporter = require("./consoleReporter");
jasmine.catchExceptions(false);
jasmine.addReporter(new consoleReporter.ConsoleReporter({
    onComplete: function (success) {
        module.exports.success = success;  // for homework
    },
    print: function (str) {
        process.stdout.write(util.format(str));
        //console.log(str);
    }
}));
/*
describe('Проверка на соответствия значениям', function(){

    it('Проверки на целочисленное значение', function(){
        expect(4).toBe(5);
        expect(4-1).toBe(3);
    });
    it('Проверки на строковое значения', function(){
       expect('3').toBe('3');
        expect('3' + 1).toBe('31');
        expect('6').not.toBe(undefined);
    });
});
*/
function some(param) {
    switch (typeof param) {
        case 'number': return ++param;
        case 'string': return 3*param.length;
        default : return null;
    }
};
describe('check function some', function (){
    it('Проверка на возвращаемый тип по входящему числу', function(){
        for(var i=1; i<1000; i++) {
            expect(typeof some(i)).toBe('number');
        }
    });


  it('check on type number', function(){
     expect(some(3)).toBe(4);
     expect(some(4)).toBe(5);
     expect(some(5)).toBe(6);
     expect(some(6)).toBe(7);
    expect(some(1.01)).toBe(2.01);
  });

  it('check on type string', function(){
     expect(some('123')).toBe(9);
     expect(some('123456789')).toBe(27);
     expect(some('Lorem Ipsum')).toBe(33);
  });

  it('check on type not number and not string',function(){
     expect(some(undefined)).toBe(null);
     expect(some(true)).toBe(null);
     expect(some(false)).toBe(null);
     expect(some([])).toBe(null);
     expect(some({})).toBe(null);
     expect(isNaN(some(NaN))).toBe(true);
  });
});
jasmine.execute();