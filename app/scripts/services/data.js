"use strict";

angular.module("portfolioApp")
	.service("dataService", ["$http", "dataCache", function($http, dataCache) {
		this.getProjects = function(callback) {
			$http.get("/api/projects", { cache: dataCache }).then(callback);
		}
	}])