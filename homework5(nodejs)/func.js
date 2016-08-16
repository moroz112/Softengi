/**
 * Created by aleksandrm on 5/27/15.
 */

//var str = "02068, г. Киев, ул. Анны Ахматовой, д. 14б";
function address(str) {
    var regCity = /г.\s\W+/im;
    var regIndex = /\d{5}/im;
    var regStreet = /ул.\s\W+/im;
    var regBuilding = /д.\s\d/im;
    var adr = str.split(',');
    var obj = {indeks:false,city:false,street:false,building:false};
    for(var i =0; i<adr.length; i++) {
        if(adr[i].match(regIndex)) {

            obj.indeks = adr[i].trim()
        }
        if(adr[i].match(regCity)) {
            obj.city = adr[i].trim();
        }
        if(adr[i].match(regStreet)) {
            obj.street = adr[i].trim();
        }
        if(adr[i].match(regBuilding)) {
            obj.building = adr[i].trim();
        }
    }
    return obj;

}

 module.exports = {
     getAddress: address
 };