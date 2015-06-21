angular.module("personaApp", ['ngRoute', 'ngAnimate'])
.controller('AppController', function($rootScope, $location){
	var app = this;

  app.atTop = true;

  app.hideDropdown = function() {
    var needToHideDropdown = !$(".navbar-toggle").hasClass("collapsed");
    if(needToHideDropdown){
      $(".navbar-toggle").click();
    }
  };

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    $rootScope.animation = currRoute.animation;
  });

  $(window).resize(function() {
    app.hideDropdown();
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll === 0) {
      app.atTop = true;
      console.log("Is At Top");
    }

    else {
      app.hideDropdown();
      app.atTop = false;
    }
  });
})

.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    title: 'Home',
    animation: 'home-animation',
    templateUrl: '/templates/home/index.html'
  })

  .when('/quiz', {
    title: 'Quiz',
    animation: 'quiz-animation',
    templateUrl: '/templates/quiz/index.html'
  })

  .when('/persona', {
    title: 'Persona',
    animation: 'grid-animation',
    templateUrl: '/templates/persona/index.html'
  })

  .when('/persona/:typeNumber', {
    title: 'Tipe ', 
    animation: 'detail-animation',
    templateUrl:'/templates/persona/detail/index.html'
  })

  .when('/about', {
    title: 'About',
    animation: '',
    templateUrl: '/templates/about/index.html'
  })

  .when('/download', {
    title: 'Download',
    animation: '',
    templateUrl: '/templates/download/index.html'
  })

  .otherwise({
    redirectTo: '/'
  });
})

.run(['$location', '$rootScope', function($location, $rootScope) {
  $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
    if (current.hasOwnProperty('$$route')) {
      $rootScope.title = current.$$route.title;
    }

    if(current.pathParams.typeNumber){
      $rootScope.title += current.pathParams.typeNumber;
    }
  });
}]);