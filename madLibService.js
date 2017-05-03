(function() {
	//call my module created in app.js
	var app = angular.module('madLibApp');
	//factory to make service
	app.factory('wordStorage', function() {
		//set empty array for words
		var words = {};
		return {
			//pull words from entry from
			setWords: function(entryWords) {
				words = entryWords;
				console.log(words);
			},
			//send words to story
			getWords: function(){
				return words;
			}
		};
	});
})();