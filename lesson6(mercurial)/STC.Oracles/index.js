var express = require("express"),
    highLight = require('./core'),
    app = express(),
    config = require("config");

app.use('/', express.static(__dirname + '/assets/html'));
function readFile(path) {
    var string = fs.readFileSync(path,{encoding:'utf8'});
    return string;
}
app.post('/make', function (req, res) {
    var str = JSON.stringify(req);
    res.send(highLight.Highlighter(str));
});
app.get('*', function(req,res) {
    var extension;
    switch (extension) {
        case 'css': res.send(readFile(config.get('static.css')));
            break;
        case 'js':  res.send(readFile(config.get('static.js')));
    }
});

app.get("/", function (req, res) {
    res.send("Hello!");
});

app.listen(config.get("server.port"));
