/**
 * Created by amoroz-prom on 17.05.15.
 */
console.log(typeof $.ajax);
//$.ajax({
//   url: "/start",
//    success: function (result) {
//        console.log(result);
//    },
//    error: function(result) {
//        console.log(result);
//    }
//});
//$.ajax({
//    url: "/somePost",
//    method: "POST",
//    success: function (result) {
//        console.log(result);
//    },
//    error: function(result) {
//        console.log(result);
//    }
//});

function makkeRequest(url,type) {

    var deferer = Q.defer();
    $.ajax({
        url: url,
        method: type || "GET",
        success: function (result) {
            deferer.resolve(result);
        },
        error: function(result) {
            deferer.reject(result);
        }
    });
    return deferer.promise;
}

var getReq =makkeRequest("/start");
var postReq = makkeRequest("/somePost", "POST");

postReq.then(function(result) {
   console.log(result);
    return getReq;
}).then(function(result){
    console.log(result);
}).done();

//getReq.then(function(result){
//   console.log(result);
//});