angular.module("personaApp")
.directive('startPage', function() {
	return {
		restrict: 'E',
		templateUrl:'/templates/quiz/mainPage/startPage.html'
	};
});