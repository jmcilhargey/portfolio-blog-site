webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(1);

	angular.module("portfolioApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(1);

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	angular.module("portfolioApp")
		.controller("ProjectsCtrl", function($scope, dataService) {
			dataService.getProjects(function(response) {
				var projects = response.data;
				$scope.projects = projects;
			});
		});

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	angular.module("portfolioApp")
		.service("dataService", function($http, dataCache) {
			this.getProjects = function(callback) {
				$http.get("/api/projects", { cache: dataCache }).then(callback);
			}
		})

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	angular.module("portfolioApp")
		.factory("dataCache", function($cacheFactory) {
			return $cacheFactory("projectData")
		});

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	angular.module("portfolioApp")
		.directive("projects", function() {
			return {
				templateUrl: "templates/projects.html",
				replace: true,
				controller: "ProjectsCtrl"
			}
		});

/***/ }
]);