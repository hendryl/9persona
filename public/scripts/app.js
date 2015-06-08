angular.module("personaApp", ['ngRoute', 'ngAnimate'])
.controller('AppController', function($rootScope, $location){
	var app = this;

  app.hideDropdown = function() {
    var needToHideDropdown = !$(".navbar-toggle").hasClass("collapsed");
    if(needToHideDropdown){
      $(".navbar-toggle").click();
    }
  };

  app.isHome = function() {
    var location = $location.path(); // '/'
    if(location === '/') {
      console.log('/');
      return true;
    } else return false;
  };

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    $rootScope.animation = currRoute.animation;
  });

  $(window).resize(function() {
    app.hideDropdown();
  });
})

.controller('homeController', function(){
  var homeCtrl = this;
  homeCtrl.isAnimating = function() {
    var x = $(".home-animation");
    var y = x.hasClass("ng-enter");
    console.log(x);
    console.log(y);
    return y;
  };
})

.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    title: 'Home',
    animation: 'home-animation',
    templateUrl: '/templates/home/index.html',
    controller: 'homeController',
    controllerAs:'home'
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
    animation: '',
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