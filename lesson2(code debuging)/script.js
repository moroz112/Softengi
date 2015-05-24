/**
 * Created by amoroz-prom on 25.04.15.
 */
//var myArray =[];
//console.log(myArray[0].length);
try {
    var inputArray = ['12', '14', '15'];
    myArray = [];
    inputArray.forEach(function (item) {
        if (item.length > 2) {
            myArray.push(item);
        }
    });
    console.log(myArray[0].length);
    console.log(3);
} catch (e){
    console.log(e);
} finally {
    console.log('ok');
}