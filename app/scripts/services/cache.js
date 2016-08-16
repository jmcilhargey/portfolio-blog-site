"use strict";

angular.module("portfolioApp")
	.factory("dataCache", ["$cacheFactory", function($cacheFactory) {
		return $cacheFactory("projectData")
	}]);