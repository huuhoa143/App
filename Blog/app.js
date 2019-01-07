var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");

var app = express();
//body parser
app.use(bodyParser.json);

app.set("views", __dirname + "/apps/views");
app.set("view engine", "ejs");

// Static folder
app.use("/static", express.static(__dirname + "/public"));

var controller = require(__dirname + "/apps/controllers");

app.use(controller);

//var host = config.get("server.host");
//var port = config.get("server.port");

app.listen(3000, function () {
    console.log("Server is running on port ", 3000);
});