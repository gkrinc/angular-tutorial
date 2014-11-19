var tutorialApp = angular.module('tutorialApp', [
	'ngRoute',
	'tutorialControllers'
]);

tutorialApp.config(['$routeProvider',
	function($routeProvider) {$routeProvider.
	when('/', {
		templateUrl: 'partials/profile.html',
		controller: 'tutorialCtrl'
	}).when('/404', {
		templateUrl: 'partials/404.html',
		controller: 'notFoundCtrl'
	}).
	otherwise({
		redirectTo: '/404'
	});
}]);


var tutorialControllers = angular.module('tutorialControllers', []);

tutorialControllers.controller('tutorialCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('/data.json').success(function(data) {
		$scope.profile = data;
	});
}]);

tutorialControllers.controller('notFoundCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('/data.json').success(function(data) {
		$scope.profile = data;
	});
}]);