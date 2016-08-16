"use strict";

angular.module("portfolioApp")
	.controller("ProjectsCtrl", ["$scope", "dataService", function($scope, dataService) {
		dataService.getProjects(function(response) {
			var projects = response.data;
			$scope.projects = projects;
		});
	}]);