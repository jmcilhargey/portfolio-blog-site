"use strict";

var express = require("express");
var fs = require("fs");
var https = require("https");
var router = require("./api")

var app = express();

console.log();

var options = {
	ca: fs.readFileSync(process.env.SSL_CA),
	key: fs.readFileSync(process.env.SSL_KEY),
	cert: fs.readFileSync(process.env.SSL_CERT)
};

require("./database");
require("./seed");

app.use("/", express.static("public"));

app.use("/api", router);

https.createServer(options, app).listen(process.env.PORT || 3000, function() {
	console.log("Server listening on port " + (process.env.PORT || 3000));
});