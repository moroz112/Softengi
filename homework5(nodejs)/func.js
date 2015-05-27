/**
 * Created by aleksandrm on 5/27/15.
 */


function address(str,reg) {
    var adr = str.split(reg);
    var obj = {};
    obj.indeks = adr[0];
    obj.city = adr[1];
    obj.street = adr[2];
    obj.building = adr[3];
    return obj;

}
 module.exports = {
     getAddress: address
 };