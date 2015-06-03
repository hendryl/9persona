angular.module("personaApp", ['ngRoute'])
.controller('AppController', function(){
	
})

.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: '/templates/home/index.html'
    })

  .when('/quiz', {
    templateUrl: '/templates/quiz/index.html'
  })

  .when('/results', {
    templateUrl: ''
  })

  .when('/persona', {
    templateUrl: '/templates/persona/index.html'
  })

  .when('/about', {
    templateUrl: '/templates/about/index.html'
  })

  .when('/download', {
    templateUrl: '/templates/download/index.html'
  });
});