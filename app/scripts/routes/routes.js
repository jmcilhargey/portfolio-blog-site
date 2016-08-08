"use strict";

var angular = require("angular");

angular.module("portfolioApp", ["ui.router"])
	.config(function($stateProvider, $urlRouterProvider) {

		//$urlRouterProvider
		//	.otherwise("/");

		$stateProvider
			.state("articles", {
				url: "/articles",
				templateUrl: "articles/index.html",
			});
	});
