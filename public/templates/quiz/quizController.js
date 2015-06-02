angular.module("personaApp")
.controller('quizController', ['$http', function($http){
    var quiz = this;
    quiz.started = false;
    quiz.questionNumber = 0;
    quiz.gender = "";

    quiz.questions = [];
    quiz.answers = [];

    $http.get('/assets/quizData.json').success(function(data){
        quiz.questions = data;
        console.log("Successfully loaded " + quiz.questions.length + " questions");
    });

    quiz.isStarted = function(){
        return quiz.started;
    };

    quiz.isGenderPage = function(){
        return quiz.isStarted() && quiz.questionNumber == 0;
    }

    quiz.setGender = function(gender) {
        quiz.gender = gender;
    }

    quiz.setAnswer = function(number) {
        var n = quiz.questions[quiz.questionNumber-1].points[number];
        quiz.answers.push(n);
    }

    quiz.start = function() {
        quiz.started = true;
    };

    quiz.showNextQuestion = function() {
        if(!quiz.gender){
            alert("Pilih cowo apa cewe dulu");
            return;
        }

        quiz.questionNumber++;

        if(quiz.questionNumber > quiz.questions.length){
            var str = "Selamat anda sudah selesai! Pilihan anda:\n";
            for(var answer in quiz.answers){
                str += quiz.answers[answer] + "\n";
            }

            alert(str);
        }
    };
}]);