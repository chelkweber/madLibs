(function() {
	var app = angular.module('madLibApp');
	
	console.log('story ctrl has loaded');
	
	app.controller('storyCtrl', function($scope, wordStorage) {
		console.log(wordStorage.getWords());
		
		$scope.print = wordStorage.getWords();
		console.log($scope.print);
		
	});
})();