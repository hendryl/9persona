angular.module("personaApp", ['ngRoute'])
.controller('AppController', function(){
	var app = this;

    app.hideDropdown = function () {
        var needToHideDropdown = !$(".navbar-toggle").hasClass("collapsed");
        if(needToHideDropdown){
            $(".navbar-toggle").click();
        }
    }

    $(window).resize(function() {
        app.hideDropdown();
    });
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