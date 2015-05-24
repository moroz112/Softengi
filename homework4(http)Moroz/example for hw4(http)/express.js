var express         = require("express"),
	path            = require("path"),
	app = express(),
	fs = require("fs"),
	//Для начала необходимо установить модуль body-parser при помощи команды: npm i body-parser
	bodyParser = require("body-parser");


app.use("/", express.static(__dirname + "/public"));

//Необходимо для получения параметров запроса, которые передаются с клиента в свойстве data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.listen(8080, function(){
	console.log("Express server listening on port 8080");
});

app.post("/insert", function (req, res) {

	fs.writeFileSync("goods.json", JSON.stringify(req.body));

	res.send("DONE!");
});


app.post("/select", function(req, res) {
	if (fs.existsSync("goods.json")) {
		res.send(fs.readFileSync("goods.json").toString());
	}
	else {
		res.send("Not found goods");
	}
});