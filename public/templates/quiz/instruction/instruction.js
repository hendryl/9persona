angular.module("personaApp")
.directive('instruction', function() {
	return {
		restrict: 'E',
		templateUrl:'/templates/quiz/instruction/instruction.html'
	};
});