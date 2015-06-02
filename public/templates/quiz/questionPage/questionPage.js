angular.module("personaApp", [])
.directive('questionPage', function() {
	return {
		restrict: 'E',
		templateUrl:'/templates/quiz/genderPage/genderPage.html'
	};
});