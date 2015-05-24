/**
 * Created by amoroz-prom on 17.05.15.
 */
//document.addEventListener('DOMContentLoaded', function(){
//   var obj = {a:1, b:{c:2}};
//    var str = JSON.stringify(obj);
//
//});

var express = require('express');
app = express();

app.register('.html');

app.listen(8080, function(){
    console.log('Server start on port 8080');
});
app.get('/', function(req,res) {
    res.send("Server is running");
});
