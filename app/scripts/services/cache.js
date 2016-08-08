"use strict";

angular.module("portfolioApp")
	.factory("dataCache", function($cacheFactory) {
		return $cacheFactory("projectData")
	});