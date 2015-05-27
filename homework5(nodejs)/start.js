/**
 * Created by aleksandrm on 5/27/15.
 */
var a = require('./test.js');
var jasmineRequire = require("./libs/jasmine/jasmine-core"),
    jasmineCore = jasmineRequire.core(jasmineRequire),
    util = require("util"),
    jasmine = jasmineCore.getEnv();
global.jasmine = jasmine;
global.describe = jasmine.describe.bind(jasmine);
global.expect = jasmine.expect.bind(jasmine);
global.it = jasmine.it.bind(jasmine);


var consoleReporter = require("./libs/jasmine/consoleReporter");
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
var str = "02068, г. Киев, ул. Анны Ахматовой, д. 14б";
var reg = /,/;
console.log( a.addr(str,reg));
describe('check function', a.test);
jasmine.execute();