angular.module("personaApp")
.controller('detailController', ['$routeParams', function($routeParams){
    var ctrl = this;
    ctrl.current = 1;
    ctrl.popInVisible = false;

    ctrl.togglePopIn = function(){
        ctrl.popInVisible = !ctrl.popInVisible;
    }

    ctrl.previous = function(){
        var num = Number(ctrl.current);

        num = num === 1 ? 9 : num - 1;
        window.location.href = '#/persona/' + num;
    }

    ctrl.next = function(){
        var num = Number(ctrl.current);
        num = num === 9 ? 1 : num + 1;
        window.location.href = '#/persona/' + num;
    }

    if($routeParams.typeNumber){
        ctrl.current = $routeParams.typeNumber;
    }
    else ctrl.current = 1;

    $(document).ready(function() {
        document.title = "9Persona - Tipe " + ctrl.current;
    });
}]);