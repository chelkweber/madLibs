(function() {
	//create module
	var app = angular.module('madLibApp', ['ngRoute']); 
	
	//inject routeProvider object into module
	app.config(function($routeProvider) {
		//add template and controller for entry page
		$routeProvider.when('/entry', {
			templateUrl: 'views/entry.html',
			controller: 'entryCtrl'
		});
		//add template and controller for story page
		$routeProvider.when('/story', {
			templateUrl: 'views/story.html',
			controller: 'storyCtrl'
		});
		//otherwise
		$routeProvider.otherwise({
			templateUrl: 'views/entry.html',
			controller: 'entryCtrl'
		});
	})
})();