"use strict";

var express = require("express");
var Projects = require("../models/projects");

var client = require("redis").createClient(process.env.REDIS_URI);

client.on("error", function(err) {
	console.log("Error: " + err);
});

var router = express.Router();

router.get("/projects", function(req, res) {

	client.get("cache", function(err, results) {

		if (results === null) {

			Projects.find({}, function(err, projects) {
				if (err) {
					return res.status(500).json({ message: err.message });
				}
				client.setex("cache", 60, JSON.stringify(projects));

				res.json(projects);
			});
		} else {
			res.send(results);
		}
	});
});

module.exports = router;
