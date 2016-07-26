"use strict";

angular.module("portfolioApp")
	.service("dataService", function($http) {
		this.getProjects = function(callback) {
			$http.get("/api/projects").then(callback);
		}
	})