/**
 * Created by amoroz-prom on 25.04.15.
 */
//debugger;
//var myValue = 5;
//myValue++;
//if(myValue === 6){
//    console.log(myValue);
//} else {
//    console.log(3);
//}




/*function some(value){
    console.log('Executing function some with value', value);
    return value +4;
}
[1,2,3,4,5].forEach(function(num){
   console.log(some(num));
});*/



//try{
//    var myValue = 'abcdfgh';
//    myValue = myValue.charAt(1);
//    console.log(myValue[1].length);
//    console.log(3);
//} catch (e){
//
//}

//var myValue = 0;
//var i =0;
//while(myValue < 500){
//    myValue +=Math.random()*10 + 1;
//    if(myValue > 100 && myValue < 110){
//        console.log(i);
//    }
//    i++;
//}
//console.log(i);

var myValue = 0,
    interval = Math.round(Math.random() * 300) + 100,
    timestart = false;
    intervalInstance = setInterval(checkMyValue, interval);
    var i =0;
function checkMyValue () {
    if(!timestart){
        console.time('>=200');
    }
    if (myValue >= 500) {
        clearInterval(intervalInstance);
    } else {
        myValue += Math.round(Math.random() * 20) + 5;
        if(myValue > 200){
            console.timeEnd('>=200');
        }
        i++;
    }
    console.log(myValue);
    console.log(i);
}