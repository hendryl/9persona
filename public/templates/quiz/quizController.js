angular.module("personaApp")
.controller('quizController', ['$http', function($http){
    var quiz = this;
    quiz.questionNumber = 0;
    quiz.gender = -1;

    quiz.questions = [];
    quiz.results = [];
    quiz.personalityCounters = [0,0,0,0,0,0,0,0,0];
    quiz.highest = 0;

    quiz.isGenderPage = function(){
        return quiz.questionNumber == 0;
    }

    quiz.setGender = function(gender) {
        quiz.gender = gender;
    }

    quiz.setAnswer = function(number) {
        var n = quiz.questions[quiz.questionNumber-1].points[number];
        quiz.personalityCounters[n-1]++;

        var changeHighest = quiz.personalityCounters[n-1] >=
         quiz.personalityCounters[quiz.highest];

        if(changeHighest){
            quiz.highest = n-1;
        }
    }

        quiz.start = function() {
        $http.get('/assets/data/quizData.json').success(function(data){
            quiz.questions = data;
            console.log("Successfully loaded " + quiz.questions.length + " questions");
            quiz.showNextQuestion();
        });
    };

    quiz.showNextQuestion = function() {
        if(quiz.gender < 0){
            alert("Pilih dahulu gender kamu sebelum melanjutkan.");
            return;
        }

        quiz.questionNumber++;

        if(quiz.questionNumber > quiz.questions.length){
            $http.get('/assets/data/quizResults.json').success(function(data){
                quiz.results = data;
                console.log("Successfully loaded " + quiz.results.length + " results");
            });
        }
    };
}]);