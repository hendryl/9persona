angular.module('personaApp')
.directive('quizCreator', function() {
	var controller = ['$http', function($http) {
		var quiz = this;
		var started = false;
		var questionNumber = 0;
		var gender = 0;

		quiz.questions = [];
		quiz.answers = [];

		$http.get('/assets/quizData.json').success(function(data){
			quiz.questions = data;
			console.log("Successfully loaded " + quiz.questions.length + " questions");
		});
	}];

	return {
		restrict: 'E',
		templateUrl:'/templates/quiz/quizCreator/quizCreator.html',
		controller: controller,
		controllerAs:"quiz"
	}
});