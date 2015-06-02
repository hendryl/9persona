angular.module('personaApp')
.directive('quizCreator', function() {
    return {
        restrict: 'E',
        templateUrl:'/templates/quiz/quizCreator/quizCreator.html',
    };
});