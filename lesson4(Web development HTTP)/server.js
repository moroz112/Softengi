/**
 * Created by amoroz-prom on 22.03.15.
 */
//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic(__dirname)).listen(8080);

var express = require("express"),
    fs = require("fs"),
    app = express();

app.use("/", express.static(__dirname + "/public"));

app.listen(8080, function () {
    console.log("Server listen on port 8080");
});
app.get('/start', function(req,res){
    res.send('yo mother fuckerrrr');
});
app.post('/somePost', function(req,res){
    res.send('ahahahahah');
});

/*
Connect with express

        var express = require("express"),
            fs = require("fs"),
            app = express();

        app.use("/", express.static(__dirname + "/public"));

        app.listen(8080, function () {
            console.log("Server listen on port 8080");
        });

Connect with express*/
