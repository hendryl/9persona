angular.module("personaApp", [])
.controller('QuizController', ['$http', function($http){
	var quiz = this;

	quiz.questions = [];
	
	$http.get('/assets/quizData.json').success(function(data){
		quiz.questions = data;
	});
}])