webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(1);

	angular.module("portfolioApp", []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	"use strict";

	angular.module("portfolioApp")
		.service("dataService", function($http) {
			this.getProjects = function(callback) {
				$http.get("/api/projects").then(callback);
			}
		})

/***/ },
/* 5 */
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