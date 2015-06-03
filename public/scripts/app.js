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
    title: 'Home',
    templateUrl: '/templates/home/index.html'
    })

  .when('/quiz', {
    title: 'Quiz',
    templateUrl: '/templates/quiz/index.html'
  })

  .when('/persona', {
    title: 'Persona',
    templateUrl: '/templates/persona/index.html'
  })

  .when('/about', {
    title: 'About',
    templateUrl: '/templates/about/index.html'
  })

  .when('/download', {
    title: 'Download',
    templateUrl: '/templates/download/index.html'
  });
})

.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    })
}]);