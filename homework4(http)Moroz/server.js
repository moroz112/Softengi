/**
 * Created by amoroz-prom on 24.05.15.
 */
var express = require("express"),
    path = require("path"),
    app = express(),
    fs = require("fs"),
    bodyParser = require("body-parser");

app.use("/", express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(8080, function(){
   console.log("Express server on port 8080");
});

app.post("/insert", function(req,res){
   fs.open('goods.json','a+', function(){
       var obj = fs.readFileSync("goods.json");
       if (obj) {
           obj = JSON.parse(obj);
           obj.push(req.body);
       }
   fs.writeFile("goods.json", JSON.stringify(obj));
   res.send("done");
   });

});
app.post("/select", function(req, res) {
    if (fs.existsSync("goods.json")) {
        res.send(fs.readFileSync("goods.json").toString());
    }
    else {
        res.send("Not found goods");
    }
});
app.post("/delete", function(req,res){
    if(fs.existsSync("goods.json")) {
        var obj = fs.readFileSync("goods.json").toString();
        if(obj) {
            obj = JSON.parse(obj);

        }
        for(var k=0;k<obj.length;k++){
            if(obj[k].id == req.body.id){
                obj.splice(k,1);
                fs.writeFile("goods.json", JSON.stringify(obj));
                res.send('suchk');
            }
        }
    }
});