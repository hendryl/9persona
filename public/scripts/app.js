angular.module("personaApp", [
	'startPage'
	,'instruction'
	,'genderPage'
	,'questionPage'
	])
.controller('QuizController', ['$http', function($http){
	var quiz = this;
	var started = false;
	var questionNumber = -1;
	var gender = 0;

	quiz.questions = [];
	quiz.answers = [];
	$http.get('/assets/quizData.json').success(function(data){
		quiz.questions = data;
		console.log("Successfully loaded questions");
		console.log(quiz.questions.length + " questions");
	});
}]);