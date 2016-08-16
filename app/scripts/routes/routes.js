"use strict";

var angular = require("angular");

angular.module("portfolioApp", ["ui.router"])
	.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state("articles", {
				url: "/articles",
				templateUrl: "articles/index.html"
			});
	}]);
