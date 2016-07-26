var mongoose = require("mongoose");

var projectsSchema = new mongoose.Schema({

	title: String,
	link: String,
	pic: String,
	desc: String
});

var model = mongoose.model("Projects", projectsSchema);

module.exports = model;