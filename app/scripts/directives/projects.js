"use strict";

angular.module("portfolioApp")
	.directive("projects", function() {
		return {
			templateUrl: "templates/projects.html",
			replace: true,
			controller: "ProjectsCtrl"
		}
	});