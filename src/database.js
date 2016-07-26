"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/portfolio", function(err) {
	if (err) {
		throw new Error("Failed to connect to MongoDB");
	} else {
		console.log("Connected to MongoDB")
	}
})