/**
 * Created by aleksandrm on 5/27/15.
 */
var func = require('./func.js');

var completeAddr = "02068, г. Киев, ул. Анны Ахматовой, д. 14б",
    incompleteAddrBuilding = "01678, г. Одесса, ул. Деребассовская",
    incompleteAddrStreet = "01678, г. Одесса, д. 14б",
    incompleteAddrCity = "01678, ул. Деребассовская, д. 14б",
    incompleteAddrIndeks = "г. Киев, ул. Анны Ахматовой, д. 14б";

function test() {
    it('check full address',function(){
        expect(func.getAddress(completeAddr)).toEqual({
           indeks:'02068',
           city:'г. Киев',
           street:'ул. Анны Ахматовой',
           building:'д. 14б'
        });
    });
    it('check incomplete address', function(){
       expect(func.getAddress(incompleteAddrBuilding)).toEqual({
          indeks:'01678',
          city:'г. Одесса',
          street:'ул. Деребассовская',
          building: false
       });
       expect(func.getAddress(incompleteAddrStreet)).toEqual({
           indeks:'01678',
           city:'г. Одесса',
           street:false,
           building:'д. 14б'
       });
       expect(func.getAddress(incompleteAddrCity)).toEqual({
           indeks:'01678',
           city:false,
           street:'ул. Деребассовская',
           building:'д. 14б'
       });
        expect(func.getAddress(incompleteAddrIndeks)).toEqual({
            indeks:false,
            city:'г. Киев',
            street:'ул. Анны Ахматовой',
            building:'д. 14б'
        });
    });


}
module.exports = {
    addr:func.getAddress,
    test: test
};