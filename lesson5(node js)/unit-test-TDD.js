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
function fact (param) {

    if (param < 2) {
        return 1;
    } else {
        return param * fact (param - 1);
    }

}
;
function some (param) {

    if (param === undefined || param === null) return null;
    switch (typeof param) {
        case "number":
            if (param === 0) {
                return "Hi!";
            } else {
                return fact(param);
            }
            break;
        case "boolean":
            return !param;
        case "object":
            if (param.name === "Carl") {
                return param.age;
            } else {
                return false;
            }
        default:
            return null;
    }

};
describe('Проверка функции some',function(){
    it('Тестирование метода', function(){
       expect(some(5)).toBe(120);
       expect(some({name:'Carl',age:16})).toBe(16);
       expect(some({name:'John',age:16})).toBe(false);
        expect(some(false)).toBe(true);
        expect(some(true)).toBe(false);
        expect(some(null)).toBe(null);
        expect(some(undefined)).toBe(null);

    });
});
jasmine.execute();