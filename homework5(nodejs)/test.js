/**
 * Created by aleksandrm on 5/27/15.
 */
var func = require('./func.js');
var str = "02068, г. Киев, ул. Анны Ахматовой, д. 14б";
var reg = /,/;
function test() {
    it('check some',function(){

    });
    it('check some2',function() {

    });
}
module.exports = {
    addr:func.getAddress,
    test: test
};