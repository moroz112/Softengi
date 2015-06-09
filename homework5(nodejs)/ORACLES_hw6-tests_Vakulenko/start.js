"use strict";


var func = require("./func.js"),
	fs = require("fs");


//Jasmine stuff BEGIN

var jasmineRequire = require("./libs/jasmine/jasmine-core.js"),
    jasmineCore = jasmineRequire.core(jasmineRequire),
    jasmine = jasmineCore.getEnv(),

    //util = require("util"),

    consoleReporter = require("./libs/jasmine/consoleReporter.js");

    jasmine.catchExceptions(false);

	jasmine.addReporter(new consoleReporter.ConsoleReporter({
	    onComplete: function (success) {
	        module.exports.success = success;  //for home task
	    },
	    print: function (str) {
	        //process.stdout.write(util.format(str));
	        console.log(str);
	    }
	}));

	global.jasmine = jasmine;
	global.describe = jasmine.describe.bind(jasmine);
	global.expect = jasmine.expect.bind(jasmine);
	global.it = jasmine.it.bind(jasmine);
    
//Jasmine stuff END


//console.log(func.parseAddress("02068, г. Киев, ул. Анны Ахматовой, д. 14б"));


eval( fs.readFileSync('./tests.js').toString() );


jasmine.execute();

