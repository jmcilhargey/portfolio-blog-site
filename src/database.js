"use strict";

var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, function(err) {
	if (err) {
		throw new Error("Failed to connect to MongoDB");
	} else {
		console.log("Connected to MongoDB")
	}
});