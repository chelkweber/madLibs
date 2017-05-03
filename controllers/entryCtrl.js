(function() {
	var app = angular.module('madLibApp');
	
	app.controller('entryCtrl', function($scope, wordStorage) {
		
		console.log('entry ctrl has loaded');
		
		$scope.wordEntry = function(entry) {
			console.log(entry);
			wordStorage.setWords(entry);
		}
	})
})();
	
