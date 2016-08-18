"use strict";

var express = require("express");
var compression = require("compression");
var router = require("./api");

var app = express();

var forceSSL = function(req, res, next) {
	if (req.headers["x-forwarded-proto"] !== "https") {
		return res.redirect(["https://", req.get("Host", req.url)].join(""));
	}
	return next();
};

if (process.env.NODE_ENV || "development" === "production") {
	app.use(forceSSL);
}

app.use(function(err, req, res, next) {
  	res.status(500);
  	res.render('error', { error: err });
});

app.use(compression());

require("./database");
require("./seed");

app.use("/", express.static("public"));

app.use("/api", router);

app.listen(process.env.PORT || 3000, function() {

	console.log("Server listening on port: " + (process.env.PORT || 3000));
});