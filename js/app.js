/* Angular App */
var tutorialApp = angular.module('tutorialApp', [
	'ngRoute',
	'tutorialControllers'
]);

/* Router */
tutorialApp.config(['$routeProvider',
	function($routeProvider) {$routeProvider.
	when('/', {

		templateUrl: 'partials/profile.html',
		controller: 'tutorialCtrl'

	}).when('/contact', {
		
		templateUrl: 'partials/contact.html',
		controller: 'tutorialCtrl'

	}).when('/404', {

		templateUrl: 'partials/404.html',
		controller: 'notFoundCtrl'

	}).otherwise({
		redirectTo: '/404'
	});
}]);


/* Controllers */
var tutorialControllers = angular.module('tutorialControllers', []);

/* Tutorial Controller */
tutorialControllers.controller('tutorialCtrl', ['$scope', '$http', '$location',
	
	/* Runs automatically when the Controller is Loaded */
	function ($scope, $http, $location) {
		/* cache busting timestamp */
		$http.get('/profile.json?t='+Date.now()).success(function(data) {
		$scope.profile = data;
	});
	
	/* Executed Manually */
	$scope.goTo = function(where) {
		$location.path(where); // path not hash
	};

}]);

/* Not Found Controller */
tutorialControllers.controller('notFoundCtrl', ['$scope', '$http',
	function ($scope, $http) {
		/* cache busting timestamp */
		$http.get('/404.json?t='+Date.now()).success(function(data) {
		$scope.data = data;
	});
}]);