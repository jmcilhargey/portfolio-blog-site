"use strict";

var express = require("express");
var router = require("./api")

var app = express();

var forceSSL = function(req, res, next) {
	if (req.headers["x-forwarded-proto"] !== "https") {
		return res.redirect(["https://", req.get("Host", req.url)].join(""));
	}
	return next();
};

require("./database");
require("./seed");

if (process.env.NODE_ENV || "development" === "production") {
	app.use(forceSSL);
}

app.use("/", express.static("public"));

app.use("/api", router);

app.listen(process.env.PORT || 3000, function() {

	console.log("Server listening on port: " + (process.env.PORT || 3000));
});