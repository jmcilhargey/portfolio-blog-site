"use strict";

angular.module("portfolioApp")
	.service("dataService", function($http, dataCache) {
		this.getProjects = function(callback) {
			$http.get("/api/projects", { cache: dataCache }).then(callback);
		}
	})