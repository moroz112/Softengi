/**
 * Created by amoroz-prom on 05.09.15.
 */
var singleton = (function(){
    var count = 0,
        exClass;
    var getCount = function() {
        return count;
    };
    var increaseCount = function() {
        count++;
    };
    var retMethods = function() {
        return {
            getCount: getCount,
            increaseCount: increaseCount
        }
    };
    return {
        getExClass: function() {
            return exClass || (exClass = retMethods() )
        }
    }
}());