"use strict";

var mongoose = require("mongoose");

mongoose.connect("mongodb://jmcilhargey:qualcom1@ds059365.mlab.com:59365/joesdb", function(err) {
	if (err) {
		throw new Error("Failed to connect to MongoDB");
	} else {
		console.log("Connected to MongoDB")
	}
})