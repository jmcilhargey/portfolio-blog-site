"use strict";

var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URI, function(err) {
	if (err) {
		console.error("Failed to connect to MongoDB: " + err);
	} else {
		console.log("Connected to MongoDB");
	}
});
