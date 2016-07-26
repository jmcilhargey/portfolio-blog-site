"use strict";

var express = require("express");
var Projects = require("../models/projects")

var router = express.Router();

router.get("/projects", function(req, res) {
	Projects.find({}, function(err, projects) {
		if (err) {
			return res.status(500).json({ message: 	err.message });
		}

		res.json(projects);
	});
});

module.exports = router;